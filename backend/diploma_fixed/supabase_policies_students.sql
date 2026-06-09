-- EduBridge Türkiye: Students table RLS (production-safe)
-- Supabase Dashboard → SQL Editor → Run

alter table public.students enable row level security;

-- Ескі demo policy-лерді жою
drop policy if exists "students_select_all_demo"  on public.students;
drop policy if exists "students_insert_demo"       on public.students;
drop policy if exists "students_update_demo"       on public.students;
drop policy if exists "students_delete_demo"       on public.students;

-- Жаңа студенттер өз жазбасын ғана оқи алады
create policy "students_select_own"
on public.students for select
to authenticated
using (auth.uid()::text = id::text OR email = auth.jwt()->>'email');

-- Жаңа студент тіркелу кезінде INSERT жасай алады
create policy "students_insert_own"
on public.students for insert
to anon, authenticated
with check (true);

-- Студент өз профилін ғана өзгерте алады
create policy "students_update_own"
on public.students for update
to authenticated
using (auth.uid()::text = id::text OR email = auth.jwt()->>'email')
with check (true);

-- DELETE тек backend (service_role) арқылы
-- Frontend-тен DELETE жасалмайды

-- ────────────────────────────────────────────────────────
-- Mentors table
alter table public.mentors enable row level security;

drop policy if exists "mentors_select_all_demo" on public.mentors;
drop policy if exists "mentors_insert_demo"      on public.mentors;
drop policy if exists "mentors_update_demo"      on public.mentors;

-- Барлығы mentor тізімін оқи алады (public info)
create policy "mentors_select_all"
on public.mentors for select
to anon, authenticated
using (true);

-- INSERT/UPDATE/DELETE тек backend (service_role) арқылы
