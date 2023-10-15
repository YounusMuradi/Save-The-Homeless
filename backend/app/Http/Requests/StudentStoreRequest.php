<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StudentStoreRequest extends FormRequest
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
                'fullname'=> 'required',
                'email'=> 'required',
                'password'=> 'required',
                'contact_number'=> 'required',
                'address' => 'required',
                'typeOfassist' => 'required'

            ];
        } else{
            return[
                'fullname'=> 'required',
                'email'=> 'required',
                'password'=> 'required',
                'contact_number'=> 'required',
                'address' => 'required',
                'typeOfassist' => 'required'
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
                'typeOfassist'=> 'is requires'
            ];
        }else{
            return[
                'fullname.required'=>'name is required',
                'email.required'=>'email is required',
                'password.required'=>'password is required',
                'contact_number.required'=> 'contact number is required',
                'address.required'=> 'address is required',
                'typeOfassist'=> 'is requires'
            ];
        }
    }
}
