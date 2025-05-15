import { X } from 'lucide-react';
import { useState } from 'react';

export default function Miranda() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[400px] bg-white shadow-xl border rounded-xl p-4 z-50">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-lg font-semibold">Miranda</h4>
        <button onClick={() => setVisible(false)}><X size={20} /></button>
      </div>
      <div className="text-sm text-gray-500">Assistant panel coming soon...</div>
    </div>
  );
}

