import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const tempStaticUrl = "AI+%E4%B8%8D%E6%98%AF%E9%80%99%E6%A8%A3%E7%94%A8%E7%9A%84%E5%90%A7.jpg";
    const imageUrl = `${process.env.AWS_S3_BUCKET_URL}/${params.id === "1" ? tempStaticUrl : undefined}`;
    
    // Check if image exists by making a HEAD request
    const response = await fetch(imageUrl, { method: 'HEAD' });
    
    if (!response.ok) {
      return NextResponse.json(
        { error: 'Image not found' },
        { status: 404 }
      );
    }

    // TODO: Fetch image metadata from your database
    const imageData = {
      id: params.id,
      title: "AI 不是這樣用的",
      description: "AI 不是這樣用的",
      tags: ["AI", "迷因", "搞笑"],
      imageUrl,
    };

    return NextResponse.json(imageData);
  } catch (error) {
    console.error('Error fetching image:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 