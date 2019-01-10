use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :ceres, CeresWeb.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :ceres, Ceres.Repo,
  adapter: Ecto.Adapters.Postgres,
  database: "ceres_test",
  pool: Ecto.Adapters.SQL.Sandbox

if System.get_env("PGHOST") do
  config :ceres, Ceres.Repo,
    hostname: System.get_env("PGHOST"),
    username: System.get_env("PGUSER"),
    password: System.get_env("PGPASSWORD")
end
