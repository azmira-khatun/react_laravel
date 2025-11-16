<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // Show all products
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    // Show form / API endpoint for creating a product
    public function create()
    {
        // For API, usually we don't need a create page
        return response()->json(['message' => 'Display form for creating a product']);
    }

    // Store new product
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'description' => 'nullable|string',
        ]);

        $product = Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'description' => $request->description,
        ]);

        return response()->json([
            'message' => 'Product created successfully',
            'product' => $product
        ], 201);
    }

    // Show single product
    public function show($id)
    {
        $product = Product::findOrFail($id);
        return response()->json($product);
    }

    // Show form / API endpoint for editing a product
    public function edit($id)
    {
        // For API, usually we don't need an edit page
        $product = Product::findOrFail($id);
        return response()->json([
            'message' => 'Display form for editing product',
            'product' => $product
        ]);
    }

    // Update existing product
    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'price' => 'sometimes|required|numeric',
            'description' => 'nullable|string',
        ]);

        $product->update($request->only(['name', 'price', 'description']));

        return response()->json([
            'message' => 'Product updated successfully',
            'product' => $product
        ]);
    }

    // Delete product
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return response()->json([
            'message' => 'Product deleted successfully'
        ]);
    }
}
