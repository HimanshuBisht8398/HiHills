"use client"
import { useParams } from 'next/navigation'
import PackagesView from '../PackagesView'

export default function ChardhamPackagePage() {
  const params = useParams() as { id?: string }
  const id = params?.id || 'package'

  return <PackagesView id={id} />
}
