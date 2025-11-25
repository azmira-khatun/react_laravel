<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    // Show all profiles
    public function index()
    {
        return Profile::all();
    }

    // Store new profile
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:profiles,email',
            'address' => 'nullable|string'
        ]);

        $profile = Profile::create($data);

        return response()->json($profile, 201);
    }

    // Show single profile
    public function show($id)
    {
        return Profile::findOrFail($id);
    }

    // Update a profile
    public function update(Request $request, $id)
    {
        $profile = Profile::findOrFail($id);

        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:profiles,email,' . $id,
            'address' => 'nullable|string'
        ]);

        $profile->update($data);

        return response()->json($profile);
    }

    // Delete a profile
    public function destroy($id)
    {
        $profile = Profile::findOrFail($id);
        $profile->delete();

        return response()->json(['message' => 'Profile deleted successfully']);
    }
}
