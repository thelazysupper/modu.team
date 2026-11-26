-- Run this in your Supabase SQL Editor to enable Supabase Auth + per-user workspace persistence
drop table if exists public.workspace_state;

create table public.workspace_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.workspace_state enable row level security;

create policy "Users can read own workspace"
  on public.workspace_state for select
  using (auth.uid() = user_id);

create policy "Users can insert own workspace"
  on public.workspace_state for insert
  with check (auth.uid() = user_id);

create policy "Users can update own workspace"
  on public.workspace_state for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
