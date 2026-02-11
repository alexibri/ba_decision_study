DROP TABLE IF EXISTS response CASCADE;
DROP TABLE IF EXISTS screen CASCADE;
DROP TABLE IF EXISTS run CASCADE;
DROP TABLE IF EXISTS design_strategy CASCADE;

CREATE TABLE IF NOT EXISTS design_strategy(
    design_strategy_id SERIAL,
    design_strategy_name VARCHAR(100) NOT NULL UNIQUE,

    CONSTRAINT pk_design_strategy_id      PRIMARY KEY (design_strategy_id)
);

CREATE TABLE IF NOT EXISTS screen(
    screen_id SERIAL,
    screen_name VARCHAR(60) NOT NULL,

    CONSTRAINT pk_screen_id PRIMARY KEY (screen_id)
);

CREATE TABLE IF NOT EXISTS run(
    run_id SERIAL,
    run_start_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    run_end_at TIMESTAMPTZ,
    run_email_address VARCHAR(150),
        
    run_status VARCHAR(40) NOT NULL
        CHECK (LOWER(run_status) IN ('undefined','started','finished','aborted')),
    design_strategy_id INT NOT NULL , 

    CONSTRAINT pk_run_id      PRIMARY KEY (run_id),
    CONSTRAINT fk_run_design_strategy_id            FOREIGN KEY (design_strategy_id)     REFERENCES design_strategy(design_strategy_id)
);

CREATE TABLE IF NOT EXISTS response(
    response_id SERIAL,
    response_type VARCHAR(50) NOT NULL,
    response_rtms INT CHECK (response_rtms >= 0),
    response_submitted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    response_selected_choice VARCHAR(100),
    response_metadata JSONB,

    run_id INT NOT NULL,
    screen_id INT NOT NULL,

    CONSTRAINT pk_response_id      PRIMARY KEY (response_id),
    CONSTRAINT fk_response_run_id            FOREIGN KEY (run_id)     REFERENCES run(run_id) ON DELETE CASCADE,
    CONSTRAINT fk_response_screen_id            FOREIGN KEY (screen_id)     REFERENCES screen(screen_id),
    CONSTRAINT uk_response_run_screen_id UNIQUE (run_id, screen_id)
);

CREATE INDEX idx_response_run ON response(run_id);
CREATE INDEX idx_response_screen ON response(screen_id);
CREATE INDEX idx_run_design_strategy ON run(design_strategy_id);

ALTER TABLE design_strategy ENABLE ROW LEVEL SECURITY;
ALTER TABLE run ENABLE ROW LEVEL SECURITY;
ALTER TABLE screen ENABLE ROW LEVEL SECURITY;
ALTER TABLE response ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public insert run"
ON run FOR INSERT TO anon
WITH CHECK (true);

CREATE POLICY "public insert response"
ON response FOR INSERT TO anon
WITH CHECK (true);


INSERT INTO design_strategy (design_strategy_name)
VALUES ('Dark Pattern'), ('Nudge');

INSERT INTO screen (screen_name)
VALUES
('S1Dark1'),
('S1Dark2'),
('S1Nudge1'),
('S1Nudge2'),
('S1Transition'),
('S2Dark1'),
('S2Nudge1'),
('S2Transition'),
('S3Dark1'),
('S3Dark2'),
('S3Nudge1'),
('S3Nudge2'),
('S3Transition');