<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails;

    protected function sendResetLinkResponse(Request $request, $response)
    {
        $response = ['message' => "Password reset email sent"];
        return response($response, 200);
    }

    protected function sendResetLinkFailedResponse(Request $request, $response)
    {
        $response = "Email could not be sent to this email address";
        return response($response, 500);
    }
}
