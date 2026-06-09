-- EduBridge Türkiye: REAL registration policies for students and mentors
-- Supabase SQL Editor -> Run

alter table if exists public.students enable row level security;
alter table if exists public.mentors enable row level security;

drop policy if exists "students_select_all" on public.students;
drop policy if exists "students_insert_all" on public.students;
drop policy if exists "students_update_all" on public.students;
drop policy if exists "students_delete_all" on public.students;
create policy "students_select_all" on public.students for select using (true);
create policy "students_insert_all" on public.students for insert with check (true);
create policy "students_update_all" on public.students for update using (true) with check (true);
create policy "students_delete_all" on public.students for delete using (true);

drop policy if exists "mentors_select_all" on public.mentors;
drop policy if exists "mentors_insert_all" on public.mentors;
drop policy if exists "mentors_update_all" on public.mentors;
drop policy if exists "mentors_delete_all" on public.mentors;
create policy "mentors_select_all" on public.mentors for select using (true);
create policy "mentors_insert_all" on public.mentors for insert with check (true);
create policy "mentors_update_all" on public.mentors for update using (true) with check (true);
create policy "mentors_delete_all" on public.mentors for delete using (true);

-- Required columns if they are missing
alter table public.students add column if not exists status text default 'Active';
alter table public.students add column if not exists city text;
alter table public.students add column if not exists specialty_interest text;

alter table public.mentors add column if not exists password text;
alter table public.mentors add column if not exists spec text;
alter table public.mentors add column if not exists phone text;
alter table public.mentors add column if not exists status text default 'Active';
