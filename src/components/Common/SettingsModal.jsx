import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Settings, Key, Globe, Eye, EyeOff } from 'lucide-react'
import { useStudyStore } from '@/store/studyStore'
import toast from 'react-hot-toast'

export default function SettingsModal({ isOpen, onClose }) {
  const { apiProvider, apiKeys, setApiProvider, setApiKey } = useStudyStore()
  const [selectedProvider, setSelectedProvider] = useState(apiProvider || 'gemini')
  const [keys, setKeys] = useState({
    gemini: apiKeys?.gemini || '',
    openai: apiKeys?.openai || '',
    claude: apiKeys?.claude || '',
  })
  const [showKeys, setShowKeys] = useState({
    gemini: false,
    openai: false,
    claude: false,
  })

  const handleSave = () => {
    setApiProvider(selectedProvider)
    setApiKey('gemini', keys.gemini)
    setApiKey('openai', keys.openai)
    setApiKey('claude', keys.claude)
    toast.success('Settings saved successfully!')
    onClose()
  }

  const handleKeyChange = (provider, val) => {
    setKeys((prev) => ({ ...prev, [provider]: val }))
  }

  const toggleShowKey = (provider) => {
    setShowKeys((prev) => ({ ...prev, [provider]: !prev[provider] }))
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-surface-200 dark:border-surface-800 bg-white/90 dark:bg-surface-900/90 p-6 shadow-2xl backdrop-blur-xl text-surface-900 dark:text-surface-50"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-100 dark:bg-brand-950 flex items-center justify-center">
                <Settings className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              </div>
              <h2 className="text-lg font-bold">API Settings</h2>
            </div>
            <button
              onClick={onClose}
              className="btn-ghost p-1.5 rounded-xl text-surface-400 hover:text-surface-600 dark:hover:text-surface-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-5">
            {/* Provider Selector */}
            <div>
              <label className="block text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider mb-2">
                Select AI Provider
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'gemini', name: 'Google Gemini' },
                  { id: 'openai', name: 'OpenAI GPT' },
                  { id: 'claude', name: 'Anthropic Claude' },
                  { id: 'mock', name: 'Offline Demo Mode' },
                ].map((p) => {
                  const isSelected = selectedProvider === p.id
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedProvider(p.id)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                        isSelected
                          ? 'bg-brand-600 border-brand-600 text-white shadow-glow'
                          : 'border-surface-200 dark:border-surface-800 hover:bg-surface-50 dark:hover:bg-surface-800/50'
                      }`}
                    >
                      {p.name}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Provider description notes */}
            <div className="rounded-2xl p-4 bg-brand-50/50 dark:bg-brand-950/20 border border-brand-100 dark:border-brand-900/50 text-xs leading-relaxed text-surface-600 dark:text-surface-300">
              {selectedProvider === 'gemini' && (
                <p>
                  🚀 <strong>Recommended:</strong> Uses <code>gemini-2.0-flash</code>. You can use your Google AI Studio API key. The free tier includes rate limits, which may cause quota errors if requested too rapidly.
                </p>
              )}
              {selectedProvider === 'openai' && (
                <p>
                  ⚡ Uses <code>gpt-4o-mini</code>. Standard OpenAI API keys are accepted. Ensure your account has active billing credits.
                </p>
              )}
              {selectedProvider === 'claude' && (
                <p>
                  🔮 Uses <code>claude-3-haiku</code>. Requires an active Anthropic Console API key with billing enabled.
                </p>
              )}
              {selectedProvider === 'mock' && (
                <p>
                  🏆 <strong>Offline Demo:</strong> Instantly generates beautiful study kits locally. Ideal for testing all dashboard components without rate limits or billing requirements.
                </p>
              )}
            </div>

            {/* API Key Input */}
            {selectedProvider !== 'mock' && (
              <div>
                <label
                  htmlFor="api-key-input"
                  className="block text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider mb-2"
                >
                  {selectedProvider === 'gemini' && 'Gemini API Key'}
                  {selectedProvider === 'openai' && 'OpenAI API Key'}
                  {selectedProvider === 'claude' && 'Anthropic API Key'}
                </label>
                <div className="relative">
                  <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
                  <input
                    id="api-key-input"
                    type={showKeys[selectedProvider] ? 'text' : 'password'}
                    placeholder={`Enter your ${selectedProvider} API key...`}
                    value={keys[selectedProvider]}
                    onChange={(e) => handleKeyChange(selectedProvider, e.target.value)}
                    className="input-field pl-10 pr-10 text-xs"
                  />
                  <button
                    onClick={() => toggleShowKey(selectedProvider)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-600 dark:hover:text-surface-200"
                    title={showKeys[selectedProvider] ? 'Hide Key' : 'Show Key'}
                  >
                    {showKeys[selectedProvider] ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <p className="text-[10px] text-surface-400 dark:text-surface-500 mt-1.5 flex items-center gap-1">
                  <Globe className="w-3 h-3" /> Keys are stored securely only in your browser localStorage.
                </p>
              </div>
            )}

            {/* Divider */}
            <div className="border-t border-surface-200 dark:border-surface-800 my-1" />

            {/* Save / Cancel buttons */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="btn-secondary flex-1 py-2.5 rounded-xl text-xs"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="btn-primary flex-1 py-2.5 rounded-xl text-xs shadow-glow hover:scale-[1.01]"
              >
                Save Settings
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
