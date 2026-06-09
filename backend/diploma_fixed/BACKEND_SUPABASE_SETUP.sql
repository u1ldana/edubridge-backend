-- EduBridge backend үшін Supabase SQL setup
-- Supabase → SQL Editor → New query → Run

-- ── Students table ───────────────────────────────────────
create table if not exists students (
  id uuid default gen_random_uuid() primary key,
  fullname text not null,
  email text unique not null,
  password text not null,  -- bcrypt хэш ретінде сақталады
  phone text,
  city text,
  country text default 'Қазақстан',
  specialty_interest text,
  english_level text,
  budget integer,
  mentor_id uuid,
  mentor_email text,
  mentor_name text,
  status text default 'Active',
  blocked boolean default false,
  role text default 'user',
  created_at timestamptz default now()
);

-- ── Mentors table ────────────────────────────────────────
create table if not exists mentors (
  id uuid default gen_random_uuid() primary key,
  name text,
  fullname text,
  email text unique not null,
  password text not null,  -- bcrypt хэш ретінде сақталады
  speciality text,
  phone text,
  status text default 'Active',
  created_at timestamptz default now()
);

-- ── Universities table ───────────────────────────────────
create table if not exists universities (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  slug text unique,
  city text,
  country text default 'Türkiye',
  type text,
  language text,
  programs text,
  description text,
  image_url text,
  tuition text,
  rating text,
  accreditation text,
  advantages text,
  campuses text,
  exchange_programs text,
  website text,
  levels text,
  why_choose text,
  admission_requirements text,
  majors text,
  scholarships text,
  accommodation text,
  education_format text,
  status text default 'active',
  created_at timestamptz default now(),
  updated_at timestamptz
);

-- ── Consultations table ──────────────────────────────────
create table if not exists consultations (
  id uuid default gen_random_uuid() primary key,
  student_email text not null,
  topic text,
  preferred_date text,
  question text,
  status text default 'pending',
  paid boolean default false,
  amount numeric default 0,
  created_at timestamptz default now()
);

-- ── Deadlines table ──────────────────────────────────────
create table if not exists deadlines (
  id uuid default gen_random_uuid() primary key,
  student_email text not null,
  title text not null,
  deadline_date text,
  note text,
  status text default 'active',
  created_at timestamptz default now()
);

-- ⚠️  ЕСКЕРТУ: Ескі plaintext паролдер болса — bcrypt арқылы миграция жасаңыз.
-- Backend server.js автоматты миграцияны кіру кезінде жасайды.
