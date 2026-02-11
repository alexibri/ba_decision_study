CREATE TABLE participant (
    participant_id BIGSERIAL,
    participant_email_adress VARCHAR(100),
    study_id BIGINT NOT NULL

    CONSTRAINT pk_participant_id      PRIMARY KEY (participant_id)

);

CREATE TABLE study(
    study_id BIGSERIAL,
    study_name VARCHAR(100) NOT NULL,
    study_created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    CONSTRAINT pk_study_id      PRIMARY KEY (study_id)
);

CREATE TABLE design_strategy(
    design_strategy_id BIGSERIAL,
    design_strategy_name VARCHAR(100) NOT NULL,
    study_id BIGINT NOT NULL,

    CONSTRAINT pk_design_strategy_id      PRIMARY KEY (design_strategy_id),
    CONSTRAINT fk_study_id            FOREIGN KEY (study_id)     REFERENCES study(study_id)  ON DELETE CASCADE
) ;

CREATE TABLE study_session(
    study_session_id BIGSERIAL,
    study_session_start_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    study_session_end_at TIMESTAMPTZ,
    participant_id BIGINT NOT NULL ,
    design_strategy_id BIGINT NOT NULL ,

    CONSTRAINT pk_study_session_id      PRIMARY KEY (study_session_id),
    CONSTRAINT fk_study_session_participant_id            FOREIGN KEY (participant_id)     REFERENCES participant(participant_id) ON DELETE CASCADE,
    CONSTRAINT fk_study_session_design_strategy_id            FOREIGN KEY (design_strategy_id)     REFERENCES design_strategy(design_strategy_id)
);

CREATE TABLE screen(
    screen_id BIGSERIAL,
    screen_name VARCHAR(30) NOT NULL,
    screen_order_index INT NOT NULL,
    study_id BIGINT NOT NULL,

    CONSTRAINT pk_screen_id      PRIMARY KEY (screen_id),
    CONSTRAINT fk_screen_study_id            FOREIGN KEY (study_id)     REFERENCES study(study_id)  ON DELETE CASCADE
);

CREATE TABLE button(
    button_id BIGSERIAL,
    button_key VARCHAR(100) NOT NULL,
    button_order_index INT,
    screen_id BIGINT NOT NULL,

    CONSTRAINT pk_button_id      PRIMARY KEY (button_id),
    CONSTRAINT fk_button_screen_id         FOREIGN KEY (screen_id)     REFERENCES screen(screen_id) ON DELETE CASCADE
);

CREATE TABLE response(
    response_id BIGSERIAL,
    response_type VARCHAR(50) NOT NULL,
    response_rtms INT,
    response_submitted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    response_selected_choice VARCHAR(100),
    response_metadata JSONB,
    study_session_id BIGINT NOT NULL,
    screen_id BIGINT NOT NULL,
    button_id BIGINT NOT NULL,

    CONSTRAINT pk_response_id      PRIMARY KEY (response_id),
    CONSTRAINT fk_response_study_session_id            FOREIGN KEY (study_session_id)     REFERENCES study_session(study_session_id) ON DELETE CASCADE,
    CONSTRAINT fk_response_screen_id            FOREIGN KEY (screen_id)     REFERENCES screen(screen_id),
    CONSTRAINT fk_response_button_id            FOREIGN KEY (button_id)     REFERENCES button(button_id)
);
