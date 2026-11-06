// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Page - Status Utility
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type StatusPageStatusUtilityActionId = "refresh-status-1";

export interface StatusPageStatusUtilityProps {
  actions?: {
    "refresh-status-1"?: () => void;
  };

}

export type StatusPageStatusUtilityActionCallbacks = NonNullable<StatusPageStatusUtilityProps["actions"]>;

export function StatusPageStatusUtility({ actions }: StatusPageStatusUtilityProps) {
  return (
    <>
      <div data-surface-id="SURF_STATUS_PAGE" className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-slate-200/80 p-8 flex flex-col items-center text-center" data-setfarm-element-ref="E000001" data-observable-refs="OBS_REFRESH_STATUS_ROUTE_UNCHANGED_OBSERVABLE OBS_REFRESH_STATUS_STATUS_TEXT_OBSERVABLE OBS_REFRESH_STATUS_STATUS_VALUE_OBSERVABLE">
          <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
            <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </div>
      
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">System Status</h1>
          <p className="text-sm text-slate-500 mb-8">Real-time status monitor and diagnostics utility</p>
      
          <div className="w-full bg-slate-50/80 rounded-xl border border-slate-100 p-5 mb-8 text-left space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/60">
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Service Route</span>
              <span className="text-sm font-mono font-medium text-slate-700 bg-white px-2.5 py-1 rounded border border-slate-200">/status</span>
            </div>
      
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/60">
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">System State</span>
              <span className="text-sm font-medium text-slate-700">Normal Operation</span>
            </div>
      
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Status Description</span>
              <span className="text-sm font-semibold text-emerald-600">Status refreshed</span>
            </div>
      
            {/* Semantic status value observable container */}
            
            <span className="sr-only">refreshed</span>
          </div>
      
          <button type="button" data-action="ACT_REFRESH_STATUS" data-control-slot="CSLOT_REFRESH_STATUS_REFRESH_BUTTON" className="inline-flex items-center justify-center px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 cursor-pointer" data-setfarm-element-ref="E000002" data-observable-refs="OBS_REFRESH_STATUS_REFRESH_BUTTON_STATE_OBSERVABLE" data-action-id="refresh-status-1" onClick={actions?.["refresh-status-1"]}>
            Refresh Status
          </button>
        </div>
    </>
  );
}
