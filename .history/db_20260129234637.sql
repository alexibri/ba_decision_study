CREATE TABLE study(
    study_id SERIAL,
    study_name VARCHAR(100) NOT NULL,

    CONSTRAINT pk_study_id      PRIMARY KEY (study_id)
);

CREATE TABLE participant (
    participant_id SERIAL,
    participant_email_adress VARCHAR(100),
    study_id INT NOT NULL,

    CONSTRAINT pk_participant_id      PRIMARY KEY (participant_id),
    CONSTRAINT fk_study_id            FOREIGN KEY (study_id)     REFERENCES study(study_id)  ON DELETE CASCADE 
);

CREATE TABLE design_strategy(
    design_strategy_id SERIAL,
    design_strategy_name VARCHAR(100) NOT NULL,

    CONSTRAINT pk_design_strategy_id      PRIMARY KEY (design_strategy_id)
) ;

CREATE TABLE study_session(
    study_session_id SERIAL,
    study_session_start_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    study_session_end_at TIMESTAMPTZ,
    study_session_status VARCHAR(40) NOT NULL,
    participant_id INT NOT NULL,
    design_strategy_id INT NOT NULL , 

    CONSTRAINT pk_study_session_id      PRIMARY KEY (study_session_id),
    CONSTRAINT fk_study_session_participant_id            FOREIGN KEY (participant_id)     REFERENCES participant(participant_id) ON DELETE CASCADE,
    CONSTRAINT fk_study_session_design_strategy_id            FOREIGN KEY (design_strategy_id)     REFERENCES design_strategy(design_strategy_id) ON DELETE CASCADE
);

CREATE TABLE response_screen(
    response_id SERIAL,
    response_type VARCHAR(50) NOT NULL,
    response_rtms INT,
    response_submitted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    response_selected_choice VARCHAR(100),
    response_metadata JSONB,
    study_session_id INT NOT NULL,
    screen_id INT NOT NULL UNIQUE,
    screen_name VARCHAR(30) NOT NULL,
    screen_decision VARCHAR(30) NOT NULL,
    screen_order_index INT NOT NULL,

    CONSTRAINT pk_response_id      PRIMARY KEY (response_id),
    CONSTRAINT fk_response_study_session_id            FOREIGN KEY (study_session_id)     REFERENCES study_session(study_session_id) ON DELETE CASCADE
);

--   REFERENCES "user" (user_id) ON UPDATE CASCADE ON DELETE RESTRICT, Was ist mir Update CASCADE