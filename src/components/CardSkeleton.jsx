function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-[var(--border-primary)] grid grid-cols-3 w-[270px] m-3 p-5 shadow-[var(--shadow-md)]">
      {/* Image */}
      <div className="flex h-[180px] w-[150px]">
        <div className="h-[180px] w-[150px] rounded-lg p-5 bg-[var(--bg-tertiary)]" />
      </div>

      {/* Title */}
      <div className="mt-45 h-5 w-3/4 rounded-md bg-[var(--bg-tertiary)]" />

      {/* Price */}
      <div className="mt-45 h-4 w-1/4 rounded-md bg-[var(--bg-tertiary)]" />

      {/* Rating + Cart */}
      <div className="mt-2 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="h-4 w-4 rounded-full bg-[var(--bg-tertiary)]" />
          <div className="h-4 w-8 rounded-md bg-[var(--bg-tertiary)]" />
          <div className="h-4 w-10 rounded-md bg-[var(--bg-tertiary)]" />
        </div>

        <div className="h-10 w-10 rounded-lg bg-[var(--bg-tertiary)]" />
      </div>
    </div>
  );
}

export default CardSkeleton;
