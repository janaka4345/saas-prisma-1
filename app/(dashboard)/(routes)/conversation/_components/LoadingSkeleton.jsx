export default function LoadingSkeleton() {
  return (
    <div class="max-w-sm animate-pulse">
      <div class="h-2.5 bg-violet-500 rounded-full  w-48 mb-4"></div>
      <div class="h-2 bg-violet-500 rounded-full  max-w-[360px] mb-2.5"></div>
      <div class="h-2 bg-violet-500 rounded-full  mb-2.5"></div>
      <span class="sr-only">Loading...</span>
    </div>
  );
}
