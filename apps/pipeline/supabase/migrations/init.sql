create extension if not exists "uuid-ossp";
create extension if not exists "pg_cron";

create table content_ideas (
    id uuid primary key default uuid_generate_v4(),
    topic text not null,
    target_platforms text[] not null,
    keywords text[] not null,
    estimated_reach integer,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
);

create table content_pieces (
    id uuid primary key default uuid_generate_v4(),
    idea_id uuid references content_ideas(id),
    title text not null,
    content text not null,
    platform text not null,
    metadata jsonb default '{}',
    status text default 'draft',
    published_url text,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
);
