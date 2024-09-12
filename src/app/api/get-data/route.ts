import client from '@/database/mongodb';
import type { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    const ProductsCollection = await client.db("PETS").collection("Products");
    let featuredProducts: any = [];
    let products: any = [];

    const featuredProductsQuery = await ProductsCollection.find({ isFeatured: true }).limit(28);
    const productsQuery = await ProductsCollection.find({ isFeatured: false }).sort({ _id: -1 }).limit(35);

    await featuredProductsQuery.forEach((doc: any) => {
      featuredProducts.push(doc);
    });

    await productsQuery.forEach((doc: any) => {
      products.push(doc);
    });

    if (!featuredProducts.length || !products.length) {
      return NextResponse.json({ success: false });
    }

    return NextResponse.json({
      success: true,
      data: {
        products,
        featuredProducts
      }
    });
  } catch (error : any) {
    console.log('error get-data: ', error);
    return NextResponse.json({ success: false, error: error?.message });
  }
}
