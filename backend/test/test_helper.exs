{:ok, _} = Application.ensure_all_started(:ex_machina)

Bureaucrat.start(
default_path: "README.md",
  titles: [
    {CeresWeb.HealthCheckController, "Health Check"},
  ]
)
ExUnit.start(formatters: [ExUnit.CLIFormatter, Bureaucrat.Formatter])

Ecto.Adapters.SQL.Sandbox.mode(Ceres.Repo, :manual)
