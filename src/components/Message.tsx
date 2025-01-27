interface MessageProps {
  isVisible: boolean;
}

export default function Message({ isVisible }: MessageProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-lg md:text-2xl text-center mt-14">
      Do you need help?
    </div>
  );
}
