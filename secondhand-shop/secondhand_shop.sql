--
-- PostgreSQL database cluster dump
--

-- Started on 2025-06-06 23:45:18

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS CONNECTION LIMIT 1000 PASSWORD 'SCRAM-SHA-256$4096:7OevhhDyj4Bi77hKAH+dXg==$kLWrZXx0Gs/WREscBcoPT0SDI80sHOn19O74o1SQMRk=:3Hy9WOte+VKzYKzRmlaHCKL5wSgjOFdu/48u07rwS14=' VALID UNTIL '2026-01-01 01:00:00+01';

--
-- User Configurations
--








--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

-- Started on 2025-06-06 23:45:18

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Completed on 2025-06-06 23:45:18

--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

-- Started on 2025-06-06 23:45:18

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 18553)
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 18552)
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.categories_id_seq OWNER TO postgres;

--
-- TOC entry 4922 (class 0 OID 0)
-- Dependencies: 219
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- TOC entry 222 (class 1259 OID 18562)
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name text NOT NULL,
    description text,
    price integer NOT NULL,
    image_url text,
    category_id integer,
    images text[],
    size text,
    stock integer DEFAULT 0
);


ALTER TABLE public.products OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 18561)
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.products_id_seq OWNER TO postgres;

--
-- TOC entry 4923 (class 0 OID 0)
-- Dependencies: 221
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- TOC entry 218 (class 1259 OID 18541)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    name text,
    role text,
    joined_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 18540)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 4924 (class 0 OID 0)
-- Dependencies: 217
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 4754 (class 2604 OID 18556)
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- TOC entry 4755 (class 2604 OID 18565)
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- TOC entry 4752 (class 2604 OID 18544)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 4914 (class 0 OID 18553)
-- Dependencies: 220
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name) FROM stdin;
1	Shirts
2	Sweater
3	Jackets
4	Overalls
5	Skirts
\.


--
-- TOC entry 4916 (class 0 OID 18562)
-- Dependencies: 222
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, name, description, price, image_url, category_id, images, size, stock) FROM stdin;
1	Lace Skull Graphic Shirt	One of a kind reworked black T-shirt with lace collar and floral lace sleeves. Features a striking skull print made of digital grid lines. Vintage meets goth aesthetic.	20	/uploads/lace-skull-shirt.jpeg	1	{/uploads/lace-skull-shirt.jpeg,/uploads/lace-skull-detail.jpeg}	S	1
2	Lacoste Wool Sweater	A timeless and cozy beige sweater from Lacoste. Made from soft wool with a crew neckline and ribbed cuffs. Simple and elegant, perfect for layering in colder seasons.	49	/uploads/lacoste-wool.jpeg	2	{/uploads/lacoste-wool.jpeg,/uploads/lacoste-label.jpeg}	M	1
3	NLY Trend Jacket	Elegant and structured black tweed jacket from NLY Trend. Features a cropped silhouette with beautiful pearl embellished buttons and decorative front pockets.	35	/uploads/nly-tweed-jacket.jpeg	3	{/uploads/nly-tweed-jacket.jpeg,/uploads/nly-button.jpeg}	S	1
4	ZARA Denim Overalls	Lightweight striped denim overalls from ZARA. Features adjustable shoulder straps with metal buckles, front chest pocket, side button closures, and a relaxed wide-leg silhouette.	29	/uploads/zara-overalls.jpeg	4	{/uploads/zara-overalls.jpeg,/uploads/zara-fullbody.jpeg,/uploads/zara-logo.jpeg}	S	1
5	Blue Striped Ruffle Blouse	This chic cropped blouse features vertical blue and white stripes, heart-shaped pearl buttons, and delicate ruffle details along the button placket. Designed with puffed sleeves and a tailored waist, it offers a flattering silhouette.	25	/uploads/blue-striped-blouse-front.jpeg	1	{/uploads/blue-striped-blouse-front.jpeg,/uploads/blue-striped-blouse-back.jpeg,/uploads/blue-striped-blouse-detail.jpeg}	S	1
6	Brown Pleated Midi Skirt	A timeless brown pleated midi skirt with an elastic waistband for comfort and flexibility. Its flowy silhouette and neat pleats offer elegance for both casual and semi formal occasions.	27	/uploads/brown-pleated-skirt.jpeg	5	{/uploads/brown-pleated-skirt.jpeg}	M	1
\.


--
-- TOC entry 4912 (class 0 OID 18541)
-- Dependencies: 218
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password, name, role, joined_at) FROM stdin;
1	admin@admin.com	admin123	Admin User	admin	2025-06-05 21:18:47.019138
\.


--
-- TOC entry 4925 (class 0 OID 0)
-- Dependencies: 219
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 5, true);


--
-- TOC entry 4926 (class 0 OID 0)
-- Dependencies: 221
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 6, true);


--
-- TOC entry 4927 (class 0 OID 0)
-- Dependencies: 217
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- TOC entry 4762 (class 2606 OID 18560)
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- TOC entry 4764 (class 2606 OID 18570)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- TOC entry 4758 (class 2606 OID 18551)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 4760 (class 2606 OID 18549)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 4765 (class 2606 OID 18571)
-- Name: products products_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id);


-- Completed on 2025-06-06 23:45:18

--
-- PostgreSQL database dump complete
--

-- Completed on 2025-06-06 23:45:18

--
-- PostgreSQL database cluster dump complete
--

