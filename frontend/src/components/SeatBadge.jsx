import React from 'react';

export default function SeatBadge({ totalSeats, filledSeats }) {
  const remaining = Math.max(0, totalSeats - filledSeats);
  const percentage = (remaining / (totalSeats || 1)) * 100;

  let colorClass = "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
  let dotColor = "bg-emerald-500";
  let statusText = `${remaining} Seats Available`;

  if (remaining === 0) {
    colorClass = "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30";
    dotColor = "bg-rose-500 animate-pulse";
    statusText = "FULL (Waitlist Active)";
  } else if (percentage <= 20) {
    colorClass = "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30";
    dotColor = "bg-amber-500 animate-ping";
    statusText = `Only ${remaining} Seats Left!`;
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border ${colorClass}`}>
      <span className={`w-2 h-2 rounded-full ${dotColor}`} />
      {statusText}
    </span>
  );
}
