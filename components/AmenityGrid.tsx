import { amenityMeta, type AmenityKey } from "@/lib/rooms";
import type { Dict } from "@/lib/dictionaries/en";
import { Icon } from "./Icon";

export function AmenityGrid({
  keys,
  labels,
  className = "",
}: {
  keys: AmenityKey[];
  labels: Dict["amenities"];
  className?: string;
}) {
  return (
    <ul className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {keys.map((k) => (
        <li
          key={k}
          className="flex items-center gap-3 bg-surface-white rounded-xl p-4 border border-outline-variant/10"
        >
          <div className="w-10 h-10 shrink-0 rounded-full bg-surface-container flex items-center justify-center text-primary">
            <Icon name={amenityMeta[k].icon} />
          </div>
          <span className="font-label-lg text-on-surface">{labels[k]}</span>
        </li>
      ))}
    </ul>
  );
}
