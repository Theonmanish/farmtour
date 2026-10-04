interface MapControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  canZoomIn: boolean;
  canZoomOut: boolean;
}

function ControlButton({
  label,
  children,
  onClick,
  disabled = false,
}: {
  label: string;
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center border border-[#282C28] bg-[#161916]/95 text-[#EAE4D8] backdrop-blur-sm transition-colors hover:border-[rgba(185,152,104,0.5)] hover:text-[#B99868] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B99868] disabled:cursor-not-allowed disabled:opacity-40"
      disabled={disabled}
      onClick={onClick}
      onPointerDown={(event) => event.stopPropagation()}
      type="button"
    >
      {children}
    </button>
  );
}

export function MapControls({
  onZoomIn,
  onZoomOut,
  onReset,
  canZoomIn,
  canZoomOut,
}: MapControlsProps) {
  return (
    <div aria-label="Map controls" className="absolute bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-20 flex flex-col gap-2 sm:bottom-6 sm:right-6">
      <div className="overflow-hidden border border-[#282C28] bg-[#161916]/95">
        <ControlButton label="Zoom in" onClick={onZoomIn} disabled={!canZoomIn}>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </ControlButton>
        <div className="mx-2 border-t border-[#282C28]" />
        <ControlButton label="Zoom out" onClick={onZoomOut} disabled={!canZoomOut}>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </ControlButton>
      </div>
      <ControlButton label="Reset map view" onClick={onReset}>
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 11a8 8 0 0 0-14.9-3M4 4v4h4m-4 5a8 8 0 0 0 14.9 3M20 20v-4h-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </ControlButton>
    </div>
  );
}
