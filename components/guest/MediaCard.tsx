import { PlayCircle, Music, Mic, Video, LucideIcon } from "lucide-react";

export type MediaType = "video" | "audio" | "videolist";

export interface MediaItem {
  id: string;
  title: string;
  type: MediaType;
  thumbnailUrl: string | null;
  embedUrl: string | null;
  description: string | null;
  highlights?: { id: string; embedUrl: string; sortOrder: number }[];
}

interface MediaCardProps {
  item: MediaItem;
  onClick: () => void;
}

const iconMap: Record<MediaType, LucideIcon> = {
  video: PlayCircle,
  audio: Music,
  videolist: Video,
};

export function MediaCard({ item, onClick }: MediaCardProps) {
  const Icon = iconMap[item.type] || PlayCircle;

  return (
    <div
      className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 bg-white"
      onClick={onClick}
    >
      <div className="aspect-video relative">
        <img
          src={item.thumbnailUrl || "/placeholder.svg"}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col items-center justify-center p-4">
          <Icon className="w-16 h-16 text-[#F1ab1c] opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300" />
          <h3 className="mt-4 text-xl text-center text-white font-bold">{item.title}</h3>
        </div>
      </div>
    </div>
  );
}
