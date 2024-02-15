import Preloader2 from "@/Components/Preloader2"
// import type {  NextApiResponse}
// from 'next';
// import {NextResponse } from 'next/server';
// import {type NextRequest} from 'next/server';



const Page = async(ctx : any) => {
  
  try {
    const {category} = ctx?.params
    const {type,brand,search,page,subCategory} = ctx?.searchParams;
    const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-cate?category=${category ? encodeURIComponent(category) : 'collection'}&type=${type ? encodeURIComponent(type) : null}&page=${Number(page - 1)}&subCategory=${subCategory ? encodeURIComponent(subCategory) : null}&search=${search ? search : null}`
    ,{cache:'no-store',next:{revalidate:0}})
    const res = await req.json();    
    console.log('res: ', res);

    // const totalPages = 1;
    // const products = {}
//  const res={data:{totalPages:5,products:null}}

    return (<Preloader2 totalPages={res?.data?.totalPages || 1} data={res?.data?.products || null}/>)
  }
catch (err) {
  console.log('err: ', err);
  
  return (<Preloader2 totalPages={1} data={null}/>)

}
}

export default Page

