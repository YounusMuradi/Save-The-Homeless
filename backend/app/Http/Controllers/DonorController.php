<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\models\Donor;
use App\Http\Requests\DonorStoreRequest;

class DonorController extends Controller
{
    public function index(){
        $donor = Donor::all();

        return response()->json([
            'results'=> $donor
        ]);
    }
    public function store(DonorStoreRequest $request){
      try{
        Donor::create([
          'fullname' => $request->fullname,
          'email'=>$request->email,
          'password'=>$request->password
        ]);
        return response()->json([
          'message' => "donor successfully created"
        ],200);
      }catch(\Exception $e){
        return response()->json([
          'message' => "something went wrong" 
        ],500);
      }

  }
    public function show($id){
        $donor = Donor::find($id);

       if(!$donor){
        return response()->json([
            'message'=> "donnor not found"
        ],404);
       } 

       return response()->json([
        'result'=> $donor
       ],200);

    }
    public function update(DonorStoreRequest $request,$id){

      try{
       $donor = Donor::find($id);
       if(!$donor){
        return $donor()->json([
          'message'=>'donor not found'
        ],404);
       } 
       $donor->fullname = $request->fullname;
       $donor->email = $request->email;
       $donor->password = $request->password;

       $donor->save();
      } catch(\Exception $e){
        return response()->json([
          'message'=> 'something went wrong'
        ],500);
       }
      
    }
    public function delete(DonorStoreRequest $id){
      $donor = Donor::find($id);

       if(!$donor){
        return response()->json([
            'message'=> "donnor not found"
        ],404);
       } 
        $donor->delete();
       return response()->json([
        'result'=> 'donor successfullay deleted'
       ],200);
    }
    
}
