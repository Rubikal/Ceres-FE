defmodule CeresWeb.HealthCheckController do
  use CeresWeb, :controller

  @doc """
  Simple health check for the application.
  """
  @spec show(Plug.Conn.t(), any()) :: Plug.Conn.t()
  def show(conn, _), do: json(conn, %{status: "Healthy!"})
end
