import { useState, useEffect } from 'react'

type UseFetchResponse<TData, TError> = {
	data: TData | null
	error: TError | null
	isLoading: boolean
}
type UseFetchOptions<TData, TError> = {
	initialData?: TData | null
}

export default function useFetch<TData>(fetcher: () => Promise<TData>): {
	data: TData | null
	isLoading: boolean
	error: boolean
	refetch: () => Promise<void>
} {
	const [data, setData] = useState<TData | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(false)

	const fetchData = async () => {
		if (!isLoading) setIsLoading(true)

		try {
			const response = await fetcher()

			setData(response)
			setIsLoading(false)
		} catch (error) {
			console.log('🚀 ~ error:', error)
			setIsLoading(false)
			setError(true)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return { data, isLoading, error, refetch: fetchData }
}
