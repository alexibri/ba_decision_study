CREATE TABLE study(
    study_id SERIAL,
    study_name VARCHAR(100) NOT NULL,

    CONSTRAINT pk_study_id      PRIMARY KEY (study_id)
);

CREATE TABLE design_strategy(
    design_strategy_id SERIAL,
    design_strategy_name VARCHAR(100) NOT NULL UNIQUE,

    CONSTRAINT pk_design_strategy_id      PRIMARY KEY (design_strategy_id)
);

CREATE TABLE participant (
    participant_id SERIAL,
    participant_email_address VARCHAR(255),
    study_id INT NOT NULL,

    CONSTRAINT UNIQUE (study_id,participant_email_address),
    CONSTRAINT pk_participant_id      PRIMARY KEY (participant_id),
    CONSTRAINT fk_study_id            FOREIGN KEY (study_id)     REFERENCES study(study_id)  ON DELETE CASCADE 
);


CREATE TABLE screen(
    screen_id SERIAL,
    screen_name VARCHAR(60) NOT NULL,
    screen_order_index INT NOT NULL,

    CONSTRAINT pk_screen_id PRIMARY KEY (screen_id)
);



CREATE TABLE study_session(
    study_session_id SERIAL,
    study_session_start_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    study_session_end_at TIMESTAMPTZ,
    study_session_status VARCHAR(40) NOT NULL
        CHECK (study_session_status IN ('started','finished','aborted')), 
    participant_id INT NOT NULL,
    design_strategy_id INT NOT NULL , 

    UNIQUE (study_session_id, screen_id),
    CONSTRAINT pk_study_session_id      PRIMARY KEY (study_session_id),
    CONSTRAINT fk_study_session_participant_id            FOREIGN KEY (participant_id)     REFERENCES participant(participant_id) ON DELETE CASCADE,
    CONSTRAINT fk_study_session_design_strategy_id            FOREIGN KEY (design_strategy_id)     REFERENCES design_strategy(design_strategy_id)

);

CREATE TABLE response(
    response_id SERIAL,
    response_type VARCHAR(50) NOT NULL,
    response_rtms INT CHECK (response_rtms >= 0),
    response_submitted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    response_selected_choice VARCHAR(100),
    response_metadata JSONB,

    study_session_id INT NOT NULL,
    screen_id INT NOT NULL,

    CONSTRAINT pk_response_id      PRIMARY KEY (response_id),
    CONSTRAINT fk_response_study_session_id            FOREIGN KEY (study_session_id)     REFERENCES study_session(study_session_id) ON DELETE CASCADE,
    CONSTRAINT fk_response_screen_id            FOREIGN KEY (screen_id)     REFERENCES screen(screen_id)
);

CREATE INDEX idx_response_session ON response(study_session_id);
CREATE INDEX idx_response_screen  ON response(screen_id);
CREATE INDEX idx_session_participant ON study_session(participant_id);
