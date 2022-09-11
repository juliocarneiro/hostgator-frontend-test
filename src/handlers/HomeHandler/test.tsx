import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen, waitFor } from '@testing-library/react'
import HomeHandler from '.'

const queryClient = new QueryClient()

describe('should render HomeHandler', () => {
  test('should loader to be visible', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <HomeHandler />
      </QueryClientProvider>
    )
    const element = screen.getByTestId('loader')
    expect(element).toBeInTheDocument()
  })
  test('should homehandler to be visible', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <HomeHandler />
      </QueryClientProvider>
    )
    await waitFor(() => screen.getByTestId('home-handler'))
    expect(screen.getByTestId('home-handler')).toBeInTheDocument()
  })
})
