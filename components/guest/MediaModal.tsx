import { Music, Share2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { MediaItem } from "./MediaCard";

interface MediaModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  content: MediaItem | null;
  linkedinWebhookUrl?: string | null;
}

export function MediaModal({ open, onOpenChange, content, linkedinWebhookUrl }: MediaModalProps) {
  if (!content) return null;

  const handleLinkedInShare = async (clipId: string, videoUrl: string) => {
    if (!linkedinWebhookUrl) return;

    const params = new URLSearchParams({
      clip_id: clipId,
      video_url: videoUrl,
      type: "video",
    });

    const width = 600;
    const height = 700;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    try {
      const res = await fetch(`${linkedinWebhookUrl}?${params}`);
      const data = await res.json();

      if (data.redirectUrl) {
        window.open(
          data.redirectUrl,
          "linkedinPopup",
          `width=${width},height=${height},left=${left},top=${top},resizable,scrollbars`
        );
      }
    } catch (error) {
      console.error("Error initiating LinkedIn share:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white border-gray-300 text-black max-w-6xl w-full p-0 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="p-4 border-b border-gray-300">
          <DialogTitle className="font-bold text-[#F1ab1c]">{content.title}</DialogTitle>
          {content.description && (
            <p className="text-gray-600 font-light mt-2">{content.description}</p>
          )}
        </DialogHeader>
        <div className="p-1 md:p-2">
          {content.type === "video" && content.embedUrl && (
            <div className="aspect-video">
              <iframe
                src={content.embedUrl}
                className="w-full h-full rounded-b-lg"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={content.title}
                loading="lazy"
              />
            </div>
          )}
          {content.type === "audio" && content.embedUrl && (
            <div className="flex flex-col items-center justify-center p-6 md:p-12">
              <div className="mb-6">
                <Music className="w-24 h-24 text-[#F1ab1c]" />
              </div>
              <div className="aspect-video w-full max-w-2xl">
                <iframe
                  src={content.embedUrl}
                  className="w-full h-full rounded-lg"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={content.title}
                  loading="lazy"
                />
              </div>
            </div>
          )}
          {content.type === "videolist" && content.highlights && content.highlights.length > 0 && (
            <div className="max-h-[70vh] overflow-y-auto p-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {content.highlights
                .sort((a, b) => a.sortOrder - b.sortOrder)
                .map((highlight, index) => (
                  <div key={highlight.id} className="flex flex-col">
                    <h4 className="text-center text-black font-bold text-sm mb-2">
                      Highlight {index + 1}
                    </h4>
                    <div className="aspect-[9/16] mb-3">
                      <iframe
                        src={highlight.embedUrl}
                        className="w-full h-full rounded-lg"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title={`Highlight ${index + 1}`}
                        loading="lazy"
                      />
                    </div>
                    {linkedinWebhookUrl && (
                      <button
                        onClick={() => handleLinkedInShare(`Highlight ${index + 1}`, highlight.embedUrl)}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#0A66C2] hover:bg-[#004182] text-white font-bold rounded-lg transition-colors"
                        title="Share on LinkedIn"
                      >
                        <Share2 className="w-4 h-4" />
                        Share to LinkedIn
                      </button>
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
