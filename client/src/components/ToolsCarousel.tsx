import { useRef, useState, useEffect } from 'react';

interface Logo {
  name: string;
  url: string;
}

const logos: Logo[] = [
  { name: 'Unity', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/KssrKzHhvFpwiMTf.png' },
  { name: 'Unreal Engine', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/oZomzTXCOvvqIsxh.png' },
  { name: '3ds Max', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/LMfUpUzbyBCWJcbj.png' },
  { name: 'Substance Designer', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/TMxXraipExkUropL.png' },
  { name: 'Substance Painter', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/voooBdmQkBYktPxd.png' },
  { name: 'Photoshop', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/nimtNFgisqmvsQgy.png' },
  { name: 'Illustrator', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/leLmsUuwBUmbnWKL.png' },
  { name: 'Meta Quest', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/DzmTzKgZnxnpmKLO.png' },
  { name: 'Pico', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/KwuxFswpThKDUAQL.png' },
  { name: 'Magic Leap', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/zXZWYoKKtCYlPVTY.png' },
  { name: 'HoloLens 2', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/THwOVKyzoJmAoERs.svg' },
  { name: 'GitHub', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/rvisytDBjhPxIoQm.png' },
  { name: 'Trello', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/TuMzGoBSYVAaSyCC.png' },
];

export default function ToolsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      
      {/* Draggable Logo Container */}
      <div
        ref={scrollContainerRef}
        className={`overflow-x-auto scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex items-center gap-12 md:gap-16 py-8 px-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group flex-shrink-0 transform transition-all duration-500 hover:scale-110 hover:-translate-y-2"
            >
              <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-500 relative z-10"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))' }}
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="text-center mt-4 text-sm text-muted-foreground font-heading">
        Drag to scroll • اسحب للتصفح
      </div>
    </div>
  );
}
