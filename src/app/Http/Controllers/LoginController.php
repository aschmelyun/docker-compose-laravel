<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    private User $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function login(LoginRequest $request)
    {
        $formValidated = $request->validated();
        $user = $this->user->where('email', $formValidated['username'])->first();
        if ($user) {
            if (Hash::check($formValidated['password'], $user->password)) {
                $token = $user->createToken(User::$tokenType)->accessToken;
                return response(['access_token' => $token]);
            }
        }
        return response(['message' => 'User not found!'], Response::HTTP_NOT_FOUND);
    }

    public function logout()
    {
        $token = auth()->user()->token();
        $token->revoke();
        return response(['message' => 'Logged out']);
    }
}
