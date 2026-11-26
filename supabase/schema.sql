-- Run this in your Supabase SQL Editor to enable cloud persistence for Modu
create table if not exists public.workspace_state (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.workspace_state enable row level security;

-- Allow workspace read/write with your project's anon key
drop policy if exists "Allow workspace read" on public.workspace_state;
create policy "Allow workspace read"
  on public.workspace_state for select
  using (true);

drop policy if exists "Allow workspace insert" on public.workspace_state;
create policy "Allow workspace insert"
  on public.workspace_state for insert
  with check (true);

drop policy if exists "Allow workspace update" on public.workspace_state;
create policy "Allow workspace update"
  on public.workspace_state for update
  using (true)
  with check (true);
