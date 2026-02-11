DROP TABLE IF EXISTS response CASCADE;
DROP TABLE IF EXISTS screen CASCADE;
DROP TABLE IF EXISTS run CASCADE;
DROP TABLE IF EXISTS participant CASCADE;
DROP TABLE IF EXISTS design_strategy CASCADE;
DROP TABLE IF EXISTS study CASCADE;

CREATE TABLE IF NOT EXISTS study(
    study_id SERIAL,
    study_name VARCHAR(100) NOT NULL,

    CONSTRAINT pk_study_id      PRIMARY KEY (study_id)
);

CREATE TABLE IF NOT EXISTS design_strategy(
    design_strategy_id SERIAL,
    design_strategy_name VARCHAR(100) NOT NULL UNIQUE,

    CONSTRAINT pk_design_strategy_id      PRIMARY KEY (design_strategy_id)
);

CREATE TABLE IF NOT EXISTS participant (
    participant_id SERIAL,
    participant_email_address VARCHAR(255),
    study_id INT NOT NULL,

    CONSTRAINT uk_participant_email_address_study_id UNIQUE (study_id,participant_email_address),
    CONSTRAINT pk_participant_id      PRIMARY KEY (participant_id),
    CONSTRAINT fk_study_id            FOREIGN KEY (study_id)     REFERENCES study(study_id)  ON DELETE CASCADE 

);

CREATE TABLE IF NOT EXISTS run(
    run_id SERIAL,
    run_start_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    run_end_at TIMESTAMPTZ,
    run_status VARCHAR(40) NOT NULL
        CHECK (LOWER(run_status) IN ('started','finished','aborted')), 
    participant_id INT NOT NULL,
    design_strategy_id INT NOT NULL , 

    CONSTRAINT pk_run_id      PRIMARY KEY (run_id),
    CONSTRAINT fk_run_participant_id            FOREIGN KEY (participant_id)     REFERENCES participant(participant_id) ON DELETE CASCADE,
    CONSTRAINT fk_run_design_strategy_id            FOREIGN KEY (design_strategy_id)     REFERENCES design_strategy(design_strategy_id)
);

CREATE TABLE IF NOT EXISTS screen(
    screen_id SERIAL,
    screen_name VARCHAR(60) NOT NULL,
    screen_order_index INT NOT NULL,

    CONSTRAINT pk_screen_id PRIMARY KEY (screen_id),
    CONSTRAINT uk_screen_order_index UNIQUE (screen_order_index)
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

ALTER TABLE study ENABLE ROW LEVEL SECURITY;
ALTER TABLE design_strategy ENABLE ROW LEVEL SECURITY;
ALTER TABLE participant ENABLE ROW LEVEL SECURITY;
ALTER TABLE run ENABLE ROW LEVEL SECURITY;
ALTER TABLE screen ENABLE ROW LEVEL SECURITY;
ALTER TABLE response ENABLE ROW LEVEL SECURITY;

CREATE INDEX idx_response_run ON response(run_id);
CREATE INDEX idx_response_screen  ON response(screen_id);
CREATE INDEX idx_run_participant ON run(participant_id);

INSERT INTO TABLE 