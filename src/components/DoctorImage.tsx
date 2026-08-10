import { useState } from "react";
import { ImageOff } from "lucide-react";

type DoctorImageProps = {
  src?: string | null;
  alt: string;
  className?: string;
};

const DoctorImage = ({ src, alt, className = "" }: DoctorImageProps) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 ${className}`}>
        <div className="text-center px-4">
          <ImageOff className="w-10 h-10 mx-auto mb-2" />
          <span className="text-sm font-medium">Image indisponible</span>
        </div>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setHasError(true)} />;
};

export default DoctorImage;
