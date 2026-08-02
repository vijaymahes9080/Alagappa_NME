import React, { useState } from 'react';
import { QrCode, X, CheckCircle, Camera, AlertCircle } from 'lucide-react';

export default function QRScannerModal({ isOpen, onClose, onScanned }) {
  const [scanResult, setScanResult] = useState(null);

  if (!isOpen) return null;

  const simulateScan = () => {
    const mockStudent = {
      regNo: "2024101001",
      name: "K. Vijaykumar",
      courseCode: "NME-CSE-101",
      timestamp: new Date().toLocaleTimeString()
    };
    setScanResult(mockStudent);
    if (onScanned) onScanned(mockStudent);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-slate-200 dark:border-slate-700">
        <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-3">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-alagappa-gold" />
            <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white">QR Classroom Scanner</h3>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-slate-900 rounded-2xl h-48 flex flex-col items-center justify-center relative overflow-hidden text-white border-2 border-dashed border-alagappa-gold/50">
          <QrCode className="w-16 h-16 text-alagappa-gold animate-pulse mb-2" />
          <p className="text-xs text-slate-300">Align Student Registration QR Code inside frame</p>

          <button
            onClick={simulateScan}
            className="mt-3 px-4 py-1.5 bg-alagappa-gold text-alagappa-darkblue font-bold text-xs rounded-xl shadow hover:bg-amber-400 transition"
          >
            Simulate Camera Scan
          </button>
        </div>

        {scanResult && (
          <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-2xl space-y-1 text-xs">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-bold">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Attendance Verified & Recorded!</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-semibold">{scanResult.name} ({scanResult.regNo})</p>
            <p className="text-slate-500">Course: {scanResult.courseCode} | Time: {scanResult.timestamp}</p>
          </div>
        )}
      </div>
    </div>
  );
}
