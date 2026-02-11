CREATE TABLE study( --Vllt auch rausnehmen. Macht ja nicht wirklich was in meinem Fall, weil es ja gehardcoded ist
    study_id BIGSERIAL,
    study_name VARCHAR(100) NOT NULL,

    CONSTRAINT pk_study_id      PRIMARY KEY (study_id)
);

CREATE TABLE participant (
    participant_id BIGSERIAL,
    participant_email_adress VARCHAR(100),
    study_id BIGINT NOT NULL --Dann auch das raus

    CONSTRAINT pk_participant_id      PRIMARY KEY (participant_id),
    CONSTRAINT fk_study_id            FOREIGN KEY (study_id)     REFERENCES study(study_id)  ON DELETE CASCADE --
)

CREATE TABLE design_strategy(
    design_strategy_id BIGSERIAL,
    design_strategy_name VARCHAR(100) NOT NULL,

    CONSTRAINT pk_design_strategy_id      PRIMARY KEY (design_strategy_id),
) ;

CREATE TABLE study_session(
    study_session_id BIGSERIAL,
    study_session_start_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    study_session_end_at TIMESTAMPTZ,
    study_session_status VARCHAR(40) NOT NULL,
    participant_id BIGINT NOT NULL,
    design_strategy_id BIGINT NOT NULL , 

    CONSTRAINT pk_study_session_id      PRIMARY KEY (study_session_id),
    CONSTRAINT fk_study_session_participant_id            FOREIGN KEY (participant_id)     REFERENCES participant(participant_id) ON DELETE CASCADE,
    CONSTRAINT fk_study_session_design_strategy_id            FOREIGN KEY (design_strategy_id)     REFERENCES design_strategy(design_strategy_id) ON DELETE CASCADE,
);

CREATE TABLE response_screen(
    response_id BIGSERIAL,
    response_type VARCHAR(50) NOT NULL,
    response_rtms INT,
    response_submitted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    response_selected_choice VARCHAR(100),
    response_metadata JSONB,
    study_session_id BIGINT NOT NULL,
    screen_id BIGINT NOT NULL,
    screen_name VARCHAR(30) NOT NULL,
    screen_decision VARCHAR(30) NOT NULL,
    screen_order_index INT NOT NULL,

    CONSTRAINT pk_response_id      PRIMARY KEY (response_id),
    CONSTRAINT fk_response_study_session_id            FOREIGN KEY (study_session_id)     REFERENCES study_session(study_session_id) ON DELETE CASCADE,
    CONSTRAINT ak_response_screen_id            ALTERNATIVE KEY (screen_id)     REFERENCES screen(screen_id),
);
