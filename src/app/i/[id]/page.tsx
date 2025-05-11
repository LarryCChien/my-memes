import Image from "next/image";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>
}

type ImageData = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

async function getImageData(id: string): Promise<ImageData> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/images/${id}`, {
    next: { revalidate: 60 }, // Cache for 1 minute
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch image data');
  }
  
  return res.json();
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resolvedParams = await params;
  
  try {
    const imageData = await getImageData(resolvedParams.id);

    return {
      title: imageData.title,
      description: imageData.description,
      openGraph: {
        title: imageData.title,
        description: imageData.description,
        images: [
          {
            url: imageData.imageUrl,
            width: 1200,
            height: 630,
            alt: imageData.title,
          },
        ],
        type: "website",
        siteName: "我的迷因收藏",
      },
      twitter: {
        card: "summary_large_image",
        title: imageData.title,
        description: imageData.description,
        images: [imageData.imageUrl],
        creator: "@yourusername",
      },
      other: {
        "og:image:width": "1200",
        "og:image:height": "630",
        "og:image:alt": imageData.title,
        "og:image:type": "image/jpeg",
        "og:locale": "zh_TW",
        "og:type": "website",
        "og:site_name": "我的迷因收藏",
        "og:url": `${process.env.NEXT_PUBLIC_SITE_URL}/i/${resolvedParams.id}`,
      },
    };
  } catch {
    return {
      title: "圖片載入中",
      description: "正在載入圖片資訊...",
    };
  }
}

export default async function ImagePage({ params }: Props) {
  const resolvedParams = await params;
  const imageData = await getImageData(resolvedParams.id);

  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="relative aspect-video">
            <Image
              src={imageData.imageUrl}
              alt={imageData.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain rounded-lg"
              priority
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{imageData.title}</h1>
            
            <div>
              <h2 className="text-lg font-semibold mb-2">標籤</h2>
              <div className="flex flex-wrap gap-2">
                {imageData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 