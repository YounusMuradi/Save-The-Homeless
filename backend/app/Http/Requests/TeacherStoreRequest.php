<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TeacherStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // return false;
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        if(request()->ismethod('post')){
            return[
                'fullname'=> 'required|max:258 |string',
                'email'=> 'required|string',
                'password'=> 'required|string',
                'contact_number'=> 'required|string',
                'address' => 'required|string'
               

            ];
        } else{
            return[
                'fullname'=> 'required|max:258 |string',
                'email'=> 'required|string',
                'password'=> 'required|string',
                'contact_number'=> 'required|string',
                'address' => 'required|string'
                
            ];
        }
    }
    public function messages()
    {
        if(request()->ismethod('post')){
            return[
                'fullname.required'=>'name is required',
                'email.required'=>'email is required',
                'password.required'=>'password is required',
                'contact_number.required'=> 'contact number is required',
                'address.required'=> 'address is required',
              
            ];
        }else{
            return[
                'fullname.required'=>'name is required',
                'email.required'=>'email is required',
                'password.required'=>'password is required',
                'contact_number.required'=> 'contact number is required',
                'address.required'=> 'address is required',
        
            ];
        }
    }
}
