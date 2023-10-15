<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use App\Http\Requests\StudentStoreRequest;


class StudentController extends Controller
{
     public function index(){
        $student = Student::all();

        return response()->json([
            'results'=> $student
        ]);
     }

     public function store(StudentStoreRequest $request){
      
      try{
        Student::create([
          'fullname' => $request->fullname,
          'email'=>$request->email,
          'password'=>$request->password,
          'contact_number'=>$request->contact_number,
          'address'=>$request->address,
          'typeOfassist'=>$request->typeOfassist
        ]);
        return response()->json([
          'message' => "students successfully created"
        ],200);
      }catch(\Exception $e){
        return response()->json([
          'message' => "something went wrong" 
        ],500);
      }
      }
       
     public function show($id){
        $student = Student::find($id);

        if(!$student){
            return response()->json([
                'message' => 'Student not found'
            ],404);
        }
        return response()->json([
            'results'=> $student
        ],200);
     }
     public function update(StudentStoreRequest $request,$id){
        try{
            $student = Student::find($id);
            if(!$student){
             return $student()->json([
               'message'=>'student not found'
             ],404);
            } 
            $student->fullname = $request->fullname;
            $student->email = $request->email;
            $student->password = $request->password;
            $student->contact_number = $request->contact_number;
            $student->address = $request->address;
            $student->typeOfassist = $request->typeOfassist;
     
            $student->save();
           } catch(\Exception $e){
             return response()->json([
               'message'=> 'something went wrong'
             ],500);
            }
     }
     public function destroy($id){
        $student = Student::find($id);

       if(!$student){
        return response()->json([
            'message'=> "student not found"
        ],404);
       } 
        $student->delete();
       return response()->json([
        'result'=> 'student successfullay deleted'
       ],200);
    }
}

