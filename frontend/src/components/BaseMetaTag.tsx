'use client'

import { useEffect } from 'react'

export function BaseMetaTag() {
  useEffect(() => {
    // Проверяем, не добавлен ли уже метатег
    const existingMeta = document.querySelector('meta[name="base:app_id"]')
    
    if (!existingMeta) {
      const meta = document.createElement('meta')
      meta.setAttribute('name', 'base:app_id')
      meta.setAttribute('content', '694c01e54d3a403912ed7e3a')
      document.head.appendChild(meta)
    }
  }, [])

  return null
}

