<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\Request;
use App\Http\Requests\TeacherStoreRequest;
class TeacherController extends Controller
{
    public function index(){
        $teacher = Teacher::all();

    return response()->json([
        'results'=> $teacher
    ]);
    }
    public function store(TeacherStoreRequest $request){
        try{
            Teacher::create([
              'fullname' => $request->fullname,
              'email'=>$request->email,
              'password'=>$request->password,
              'contact_number'=>$request->contact_number,
              'address'=>$request->address,
            ]);
            return response()->json([
              'message' => "Teacher successfully created"
            ],200);
          }catch(\Exception $e){
            return response()->json([
              'message' => "something went wrong" 
            ],500);
          }
    }

    public function show($id){
        $teacher = Teacher::find($id);

        if(!$teacher){
        return response()->json([
                'message' => 'teacher not found'
            ],404);
        }
        return response()->json([
            'results'=> $teacher
        ],200);
    }
     
    public function update(TeacherStoreRequest $request, $id){
        try{
            $teacher = Teacher::find($id);
            if(!$teacher){
             return $teacher()->json([
               'message'=>'student not found'
             ],404);
            } 
            $teacher->fullname = $request->fullname;
            $teacher->email = $request->email;
            $teacher->password = $request->password;
            $teacher->contact_number = $request->contact_number;
            $teacher->address = $request->address;
        
            $teacher->save();
           } catch(\Exception $e){
             return response()->json([
               'message'=> 'something went wrong'
             ],500);
            }
    }
    public function destroy($id){
        $teacher = Teacher::find($id);

        if(!$teacher){
         return response()->json([
             'message'=> "donnor not found"
         ],404);
        } 
         $teacher->delete();
        return response()->json([
         'result'=> 'donor successfullay deleted'
        ],200);
    }

}
