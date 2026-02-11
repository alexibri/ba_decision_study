CREATE TABLE participant (
    participant_ID BIGSERIAL,
    participant_emailAdress VARCHAR(100),

    CONSTRAINT pk_participant_ID      PRIMARY KEY (participant_ID)
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
    CONSTRAINT fk_design_strategy_study_id            FOREIGN KEY (study_id)     REFERENCES study(study_id)  ON DELETE CASCADE
) ;

CREATE TABLE study_session(
    study_session_ID BIGSERIAL,
    study_session_startAt TIMESTAMPTZ NOT NULL DEFAULT now(),
    study_session_endAt TIMESTAMPTZ,
    participant_ID BIGINT NOT NULL ,
    design_strategy_id BIGINT NOT NULL ,

    CONSTRAINT pk_study_session_ID      PRIMARY KEY (study_session_ID),
    CONSTRAINT fk_study_session_participant_ID            FOREIGN KEY (participant_ID)     REFERENCES participant(participant_ID) ON DELETE CASCADE,
    CONSTRAINT fk_study_session_design_strategy_id            FOREIGN KEY (design_strategy_id)     REFERENCES design_strategy(design_strategy_id)
);

CREATE TABLE screen(
    screen_ID BIGSERIAL,
    screen_name VARCHAR(30) NOT NULL,
    screen_orderIndex INT NOT NULL,
    study_id BIGINT NOT NULL,

    CONSTRAINT pk_screen_ID      PRIMARY KEY (screen_ID),
    CONSTRAINT fk_screen_study_id            FOREIGN KEY (study_id)     REFERENCES study(study_id)  ON DELETE CASCADE
);

CREATE TABLE button(
    button_ID BIGSERIAL,
    button_key VARCHAR(100) NOT NULL,
    button_orderIndex INT,
    screen_ID BIGINT NOT NULL,

    CONSTRAINT pk_button_ID      PRIMARY KEY (button_ID),
    CONSTRAINT fk_button_screen_ID         FOREIGN KEY (screen_ID)     REFERENCES Screen(screen_ID) ON DELETE CASCADE
);

CREATE TABLE Response(
    response_ID BIGSERIAL,
    response_type VARCHAR(50) NOT NULL,
    response_rtMs INT,
    response_submittedAt TIMESTAMPTZ NOT NULL DEFAULT now(),
    response_selectedChoice VARCHAR(100),
    response_metadata JSONB,
    study_session_ID BIGINT NOT NULL,
    screen_ID BIGINT NOT NULL,
    button_ID BIGINT NOT NULL,

    CONSTRAINT pk_response_ID      PRIMARY KEY (response_ID),
    CONSTRAINT fk_response_study_session_ID            FOREIGN KEY (study_session_ID)     REFERENCES study_session(study_session_ID) ON DELETE CASCADE,
    CONSTRAINT fk_response_screen_ID            FOREIGN KEY (screen_ID)     REFERENCES Screen(screen_ID),
    CONSTRAINT fk_response_button_ID            FOREIGN KEY (button_ID)     REFERENCES Button(button_ID)
);
