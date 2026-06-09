
-- Optional tables for profile deadlines and consultations
create table if not exists public.deadlines (
  id uuid primary key default gen_random_uuid(),
  student_email text not null,
  title text not null,
  deadline_date date not null,
  note text,
  status text default 'active',
  created_at timestamptz default now()
);

create table if not exists public.consultations (
  id uuid primary key default gen_random_uuid(),
  student_email text not null,
  topic text not null,
  preferred_date date,
  question text,
  status text default 'pending',
  paid boolean default false,
  amount numeric default 0,
  created_at timestamptz default now()
);

alter table public.deadlines enable row level security;
alter table public.consultations enable row level security;

drop policy if exists "backend_all_deadlines" on public.deadlines;
drop policy if exists "backend_all_consultations" on public.consultations;
create policy "backend_all_deadlines" on public.deadlines for all using (true) with check (true);
create policy "backend_all_consultations" on public.consultations for all using (true) with check (true);
