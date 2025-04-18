"use client"

// This is a polyfill for the experimental useEffectEvent hook
// It provides a stable reference to a callback that can be used in effects
// without causing the effect to re-run when the callback changes

import { useCallback, useRef } from "react"

// This provides similar functionality to the experimental useEffectEvent
export function useEffectEvent<T extends (...args: any[]) => any>(callback: T): T {
  const callbackRef = useRef(callback)

  // Update the ref whenever the callback changes
  callbackRef.current = callback

  // Return a stable function that delegates to the current callback
  return useCallback(
    ((...args) => {
      return callbackRef.current(...args)
    }) as T,
    [],
  )
}

// For backward compatibility with code that might be importing from 'react'
// This allows code to import { useEffectEvent } from '@/hooks/use-effect-event'
// instead of from 'react'
export default useEffectEvent
