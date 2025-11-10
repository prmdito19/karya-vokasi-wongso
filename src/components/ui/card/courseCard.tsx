import { IconButton } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";

// Interface untuk CourseCard
interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  duration?: string;
  progress?: number;
  price?: string;
  originalPrice?: string;
  category: string;
  isPremium?: boolean;
  hasBestSeller?: boolean;
  onCardClick?: () => void;
  onMenuClick?: () => void;
  // Tambah props untuk action buttons
  bookmark?: boolean;
  isBookmarked?: boolean;
  bookmarkClick?: () => void;
  showActionButtons?: boolean;
  onEditClick?: () => void;
  onDeleteClick?: () => void;
  onViewClick?: () => void;
}

export default function CourseCard({
  title,
  description,
  imageUrl,
  duration,
  progress,
  price,
  originalPrice,
  category,
  isPremium = false,
  hasBestSeller = true,
  onCardClick,
  onMenuClick,
  showActionButtons = false,
  bookmark = false,
  isBookmarked = false,
  bookmarkClick,
  onEditClick,
  onDeleteClick,
  onViewClick,
}: CourseCardProps) {
  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick();
    }
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onMenuClick) {
      onMenuClick();
    }
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onEditClick) {
      onEditClick();
    }
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDeleteClick) {
      onDeleteClick();
    }
  };

  const handleViewClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onViewClick) {
      onViewClick();
    }
  };

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (bookmarkClick) {
      bookmarkClick();
    }
  };

  // Generate tags dari category dan duration
  const generateTags = () => {
    const tags = [category];
    if (duration) {
      tags.push(duration);
    }
    if (isPremium) {
      tags.push("Premium");
    }
    return tags;
  };

  const tags = generateTags();

  const getTagColorClass = (index: number) => {
    const tagColors = [
      "bg-blue-100 text-[#42A5F5]",
      "bg-green-100 text-[#2A944A]",
      "bg-orange-100 text-[#FFA725]",
    ];
    return tagColors[index % tagColors.length];
  };

  const getBadgeColor = () => {
    return isPremium ? "#FFA725" : "#42A5F5";
  };

  const getBadgeText = () => {
    return isPremium ? "Premium" : "Gratis!";
  };

  return (
    <div
      className="relative cursor-pointer group hover:translate-y-[-3px] w-full  transition-all duration-200"
      onClick={handleCardClick}
    >
      {/* Badge Premium/Gratis */}
      <div className="absolute top-5 -left-3 z-10 flex items-start gap-3">
        <div className="relative">
          <div
            className="w-[107px] h-[29px] rounded-tl-lg"
            style={{ backgroundColor: getBadgeColor() }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="text-white font-bold text-base px-4">
              {getBadgeText()}
            </span>
          </div>
          <svg
            className="absolute bottom-[-13px] left-0"
            width="15"
            height="14"
            viewBox="0 0 14 13"
            fill="none"
          >
            <path
              d="M12.0904 0H1.00205C0.0988046 0 -0.341565 1.10269 0.313197 1.7249L11.4015 12.2619C12.0385 12.8672 13.0904 12.4157 13.0904 11.537V1C13.0904 0.447715 12.6427 0 12.0904 0Z"
              fill={getBadgeColor()}
            />
          </svg>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl  transition-all duration-200 group-hover:border-[#4bd270] h-[420px] flex flex-col">
        <div className="relative h-[227px] bg-gray-200 overflow-hidden shrink-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-200 ease-in group-hover:scale-105"
          />
          {hasBestSeller && (
            <div className="absolute bottom-3 left-3">
              <div className="inline-flex items-center px-3 py-2 rounded-lg bg-[#DED9FD] shadow-lg">
                <span className="text-[#5A42F5] text-xs font-normal">
                  Best Seller!
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-1 min-h-0">
          <div className="flex items-start justify-between mb-3 min-h-[60px]">
            <div className="flex-1 pr-2">
              <h3 className="text-lg text-left font-medium mb-1 hover:text-[#4bd270] transition-colors duration-200 line-clamp-2 leading-tight">
                {title}
              </h3>
              <p className="text-sm text-left text-slate-500 mb-2 line-clamp-1 leading-tight">
                {description}
              </p>
              {price && (
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-[#4bd270] truncate">
                    {price}
                  </span>
                  {originalPrice && (
                    <span className="text-sm text-gray-500 line-through truncate">
                      {originalPrice}
                    </span>
                  )}
                </div>
              )}
            </div>
            {!showActionButtons && (
              <button
                className="p-1 hover:bg-gray-100 rounded transition-colors duration-200 shrink-0 mt-1"
                onClick={handleMenuClick}
                aria-label="Course menu"
              >
                <svg width="18" height="4" viewBox="0 0 18 4" fill="none">
                  <circle
                    cx="2"
                    cy="2"
                    r="2"
                    fill="currentColor"
                    className="text-gray-600"
                  />
                  <circle
                    cx="9"
                    cy="2"
                    r="2"
                    fill="currentColor"
                    className="text-gray-600"
                  />
                  <circle
                    cx="16"
                    cy="2"
                    r="2"
                    fill="currentColor"
                    className="text-gray-600"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 min-h-7 items-start">
            {tags &&
              tags.length > 0 &&
              tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className={`px-2 py-1 text-[10px] font-semibold rounded-xl transition-colors duration-200 truncate max-w-20 ${getTagColorClass(
                    index
                  )}`}
                  title={tag}
                >
                  {tag}
                </span>
              ))}
          </div>

          {/* Progress Bar (jika ada) */}
          {progress !== undefined && (
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-2.5 bg-[#EBEBEB] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#087B2E] rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                  aria-label={`Progress: ${progress}%`}
                ></div>
              </div>
              <span className="text-[10px] font-medium text-[#4E5566] shrink-0">
                {progress}%
              </span>
            </div>
          )}

          {/* Action Buttons - Tampil hanya jika showActionButtons true */}
          {showActionButtons && (
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              <button
                onClick={handleDeleteClick}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-[#FF5252] hover:bg-[#F44336] rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c0-1 1-2 2-2v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
                Hapus Kelas
              </button>
              <button
                onClick={handleEditClick}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-[#FFA725] hover:bg-[#FF9800] rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                Edit Kelas
              </button>
              <button
                onClick={handleViewClick}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-[#42A5F5] hover:bg-[#2196F3] rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Lihat Kelas
              </button>
            </div>
          )}

          {bookmark && (
            <div className="absolute bottom-5 right-5">
              <IconButton
                color="inherit"
                onClick={handleBookmarkClick}
                sx={{ color: isBookmarked ? "#42A5F5" : "#8b8b8b" }}
              >
                <BookmarkIcon />
              </IconButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
