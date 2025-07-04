import type { MessageKey_defaultSet } from "keycloakify/login";

/* spell-checker: disable */
const messages: Record<MessageKey_defaultSet, string> = {
    doLogIn: "로그인",
    doRegister: "가입하기",
    doRegisterSecurityKey: "등록",
    doCancel: "취소",
    doSubmit: "제출",
    doBack: "뒤로",
    doYes: "예",
    doNo: "아니요",
    doContinue: "계속",
    doIgnore: "무시",
    doAccept: "수락",
    doDecline: "거절",
    doForgotPassword: "비밀번호를 잊으셨나요?",
    doClickHere: "여기를 클릭하세요",
    doImpersonate: "사용자 전환",
    doTryAgain: "다시 시도",
    doTryAnotherWay: "다른 방법으로 시도",
    doConfirmDelete: "삭제 확인",
    errorDeletingAccount: "계정 삭제 중 오류가 발생했습니다",
    deletingAccountForbidden: "계정을 삭제할 권한이 없습니다. 관리자에게 문의하세요.",
    kerberosNotConfigured: "Kerberos가 구성되지 않았습니다",
    kerberosNotConfiguredTitle: "Kerberos가 구성되지 않음",
    bypassKerberosDetail:
        "Kerberos로 로그인하지 않았거나 브라우저에 Kerberos 로그인이 설정되어 있지 않습니다. 계속을 클릭하여 다른 방법으로 로그인하세요.",
    kerberosNotSetUp: "Kerberos가 설정되어 있지 않습니다. 로그인할 수 없습니다.",
    registerTitle: "회원가입",
    loginAccountTitle: "계정에 로그인",
    loginTitle: "{0}에 로그인",
    loginTitleHtml: "{0}",
    impersonateTitle: "{0} 사용자 전환",
    impersonateTitleHtml: "<strong>{0}</strong> 사용자 전환",
    realmChoice: "영역",
    unknownUser: "알 수 없는 사용자",
    loginTotpTitle: "모바일 인증기 설정",
    loginProfileTitle: "계정 정보 업데이트",
    loginIdpReviewProfileTitle: "계정 정보 업데이트",
    loginTimeout: "로그인 시도가 시간 초과되었습니다. 처음부터 다시 로그인합니다.",
    reauthenticate: "계속하려면 다시 인증하세요.",
    authenticateStrong: "계속하려면 강력한 인증이 필요합니다.",
    oauthGrantTitle: "{0}에 대한 액세스 권한 부여",
    oauthGrantTitleHtml: "{0}",
    oauthGrantInformation:
        "{0}가 데이터를 처리하는 방법을 확인하여 신뢰할 수 있는지 확인하세요.",
    oauthGrantReview: "다음을 검토할 수 있습니다: ",
    oauthGrantTos: "서비스 약관.",
    oauthGrantPolicy: "개인정보 처리방침.",
    errorTitle: "죄송합니다...",
    errorTitleHtml: "<strong>죄송합니다</strong>...",
    emailVerifyTitle: "이메일 인증",
    emailForgotTitle: "비밀번호를 잊으셨나요?",
    updateEmailTitle: "이메일 업데이트",
    emailUpdateConfirmationSentTitle: "확인 이메일 발송 완료",
    emailUpdateConfirmationSent:
        "{0}(으)로 확인 이메일이 발송되었습니다. 이메일의 안내에 따라 이메일 업데이트를 완료해야 합니다.",
    emailUpdatedTitle: "이메일 업데이트 완료",
    emailUpdated: "계정 이메일이 {0}(으)로 성공적으로 업데이트되었습니다.",
    updatePasswordTitle: "비밀번호 업데이트",
    codeSuccessTitle: "성공 코드",
    codeErrorTitle: "오류 코드: {0}",
    displayUnsupported: "요청된 표시 유형을 지원하지 않습니다",
    browserRequired: "로그인하려면 브라우저가 필요합니다",
    browserContinue: "로그인을 완료하려면 브라우저가 필요합니다",
    browserContinuePrompt: "브라우저를 열고 로그인을 계속하시겠습니까? [y/n]:",
    browserContinueAnswer: "y",
    usb: "USB",
    nfc: "NFC",
    bluetooth: "블루투스",
    internal: "내장형",
    unknown: "알 수 없음",
    termsTitle: "이용 약관",
    termsText: "",
    termsPlainText: "이용 약관이 정의될 예정입니다.",
    termsAcceptanceRequired: "이용 약관에 동의해야 합니다.",
    acceptTerms: "이용 약관에 동의합니다",
    deleteCredentialTitle: "{0} 삭제",
    deleteCredentialMessage: "{0}을(를) 삭제하시겠습니까?",
    recaptchaFailed: "reCAPTCHA가 유효하지 않습니다",
    recaptchaNotConfigured: "reCAPTCHA가 필요하지만 구성되지 않았습니다",
    consentDenied: "동의가 거부되었습니다.",
    noAccount: "처음이신가요?",
    username: "사용자 이름",
    usernameOrEmail: "사용자 이름 또는 이메일",
    firstName: "이름",
    givenName: "이름",
    fullName: "전체 이름",
    lastName: "성",
    familyName: "성",
    email: "이메일",
    password: "비밀번호",
    passwordConfirm: "비밀번호 확인",
    passwordNew: "새 비밀번호",
    passwordNewConfirm: "새 비밀번호 확인",
    hidePassword: "비밀번호 숨기기",
    showPassword: "비밀번호 보기",
    rememberMe: "로그인 상태 유지",
    authenticatorCode: "일회용 코드",
    address: "주소",
    street: "도로명 주소",
    locality: "도시 또는 지역",
    region: "시/도, 주 또는 지역",
    postal_code: "우편번호",
    country: "국가",
    emailVerified: "이메일 인증됨",
    website: "웹 페이지",
    phoneNumber: "전화번호",
    phoneNumberVerified: "전화번호 인증됨",
    gender: "성별",
    birthday: "생년월일",
    zoneinfo: "시간대",
    gssDelegationCredential: "GSS 위임 자격 증명",
    logoutOtherSessions: "다른 기기에서 로그아웃",
    profileScopeConsentText: "사용자 프로필",
    emailScopeConsentText: "이메일 주소",
    addressScopeConsentText: "주소",
    phoneScopeConsentText: "전화번호",
    offlineAccessScopeConsentText: "오프라인 액세스",
    samlRoleListScopeConsentText: "내 역할",
    rolesScopeConsentText: "사용자 역할",
    organizationScopeConsentText: "조직",
    restartLoginTooltip: "로그인 다시 시작",
    loginTotpIntro: "이 계정에 액세스하려면 일회용 비밀번호 생성기를 설정해야 합니다",
    loginTotpStep1: "모바일 기기에 다음 애플리케이션 중 하나를 설치하세요:",
    loginTotpStep2: "애플리케이션을 열고 바코드를 스캔하세요:",
    loginTotpStep3:
        "애플리케이션에서 제공하는 일회용 코드를 입력하고 제출을 클릭하여 설정을 완료하세요.",
    loginTotpStep3DeviceName: "OTP 기기 관리에 도움이 되도록 기기 이름을 입력하세요.",
    loginTotpManualStep2: "애플리케이션을 열고 키를 입력하세요:",
    loginTotpManualStep3:
        "애플리케이션에서 설정이 가능한 경우 다음 구성 값을 사용하세요:",
    loginTotpUnableToScan: "스캔할 수 없나요?",
    loginTotpScanBarcode: "바코드를 스캔하시겠습니까?",
    loginCredential: "자격 증명",
    loginOtpOneTime: "일회용 코드",
    loginTotpType: "유형",
    loginTotpAlgorithm: "알고리즘",
    loginTotpDigits: "자릿수",
    loginTotpInterval: "간격",
    loginTotpCounter: "카운터",
    loginTotpDeviceName: "기기 이름",
    "loginTotp.totp": "시간 기반",
    "loginTotp.hotp": "카운터 기반",
    totpAppFreeOTPName: "FreeOTP",
    totpAppGoogleName: "Google Authenticator",
    totpAppMicrosoftAuthenticatorName: "Microsoft Authenticator",
    loginChooseAuthenticator: "로그인 방법 선택",
    oauthGrantRequest: "이러한 접근 권한을 부여하시겠습니까?",
    inResource: "에서",
    oauth2DeviceVerificationTitle: "기기 로그인",
    verifyOAuth2DeviceUserCode: "기기에서 제공된 코드를 입력하고 제출을 클릭하세요",
    oauth2DeviceInvalidUserCodeMessage: "코드가 잘못되었습니다. 다시 시도해 주세요.",
    oauth2DeviceExpiredUserCodeMessage:
        "코드가 만료되었습니다. 기기로 돌아가 다시 연결을 시도해 주세요.",
    oauth2DeviceVerificationCompleteHeader: "기기 로그인 성공",
    oauth2DeviceVerificationCompleteMessage:
        "이 브라우저 창을 닫고 기기로 돌아가도 됩니다.",
    oauth2DeviceVerificationFailedHeader: "기기 로그인 실패",
    oauth2DeviceVerificationFailedMessage:
        "이 브라우저 창을 닫고 기기로 돌아가 다시 연결을 시도할 수 있습니다.",
    oauth2DeviceConsentDeniedMessage: "기기 연결에 대한 동의가 거부되었습니다.",
    oauth2DeviceAuthorizationGrantDisabledMessage:
        "클라이언트가 OAuth 2.0 기기 인증 권한 부여를 시작할 수 없습니다. 이 흐름은 클라이언트에 대해 비활성화되어 있습니다.",
    emailVerifyInstruction1:
        "이메일 주소 인증 안내가 포함된 이메일이 {0}(으)로 발송되었습니다.",
    emailVerifyInstruction2: "이메일로 인증 코드를 받지 못하셨나요?",
    emailVerifyInstruction3: "을(를) 클릭하여 이메일을 다시 보내세요.",
    emailLinkIdpTitle: "{0} 연결",
    emailLinkIdp1:
        "{0} 계정 {1}을(를) 귀하의 {2} 계정과 연결하기 위한 안내 이메일이 발송되었습니다.",
    emailLinkIdp2: "이메일로 인증 코드를 받지 못하셨나요?",
    emailLinkIdp3: "을(를) 클릭하여 이메일을 다시 보내세요.",
    emailLinkIdp4: "다른 브라우저에서 이미 이메일을 인증한 경우",
    emailLinkIdp5: "을(를) 클릭하여 계속하세요.",
    backToLogin: "« 로그인으로 돌아가기",
    emailInstruction:
        "사용자 이름 또는 이메일 주소를 입력하시면 새 비밀번호 생성 안내를 보내드립니다.",
    emailInstructionUsername:
        "사용자 이름을 입력하시면 새 비밀번호 생성 안내를 보내드립니다.",
    copyCodeInstruction: "이 코드를 복사하여 애플리케이션에 붙여넣으세요:",
    pageExpiredTitle: "페이지가 만료되었습니다",
    pageExpiredMsg1: "로그인 절차를 다시 시작하려면",
    pageExpiredMsg2: "로그인 절차를 계속하려면",
    personalInfo: "개인 정보:",
    role_admin: "관리자",
    "role_realm-admin": "Realm 관리자",
    "role_create-realm": "Realm 생성",
    "role_create-client": "클라이언트 생성",
    "role_view-realm": "Realm 보기",
    "role_view-users": "사용자 보기",
    "role_view-applications": "애플리케이션 보기",
    "role_view-clients": "클라이언트 보기",
    "role_view-events": "이벤트 보기",
    "role_view-identity-providers": "ID 공급자 보기",
    "role_manage-realm": "Realm 관리",
    "role_manage-users": "사용자 관리",
    "role_manage-applications": "애플리케이션 관리",
    "role_manage-identity-providers": "ID 공급자 관리",
    "role_manage-clients": "클라이언트 관리",
    "role_manage-events": "이벤트 관리",
    "role_view-profile": "프로필 보기",
    "role_manage-account": "계정 관리",
    "role_manage-account-links": "계정 연결 관리",
    "role_read-token": "토큰 읽기",
    "role_offline-access": "오프라인 액세스",
    client_account: "계정",
    "client_account-console": "계정 콘솔",
    "client_security-admin-console": "보안 관리 콘솔",
    "client_admin-cli": "관리자 CLI",
    "client_realm-management": "Realm 관리",
    client_broker: "브로커",
    requiredFields: "필수 입력 항목",
    invalidUserMessage: "사용자 이름 또는 비밀번호가 잘못되었습니다.",
    invalidUsernameMessage: "사용자 이름이 잘못되었습니다.",
    invalidUsernameOrEmailMessage: "사용자 이름 또는 이메일이 잘못되었습니다.",
    invalidPasswordMessage: "비밀번호가 잘못되었습니다.",
    invalidEmailMessage: "이메일 주소가 잘못되었습니다.",
    accountDisabledMessage: "계정이 비활성화되었습니다. 관리자에게 문의하세요.",
    accountTemporarilyDisabledMessage:
        "계정이 일시적으로 비활성화되었습니다. 관리자에게 문의하거나 나중에 다시 시도하세요.",
    expiredCodeMessage: "로그인 시간 초과. 다시 로그인해 주세요.",
    expiredActionMessage: "작업이 만료되었습니다. 지금 로그인을 계속하세요.",
    expiredActionTokenNoSessionMessage: "작업이 만료되었습니다.",
    expiredActionTokenSessionExistsMessage: "작업이 만료되었습니다. 다시 시작해 주세요.",
    sessionLimitExceeded: "세션이 너무 많습니다",
    identityProviderLogoutFailure: "SAML ID 공급자 로그아웃 실패",
    missingFirstNameMessage: "이름을 입력해 주세요.",
    missingLastNameMessage: "성을 입력해 주세요.",
    missingEmailMessage: "이메일을 입력해 주세요.",
    missingUsernameMessage: "사용자 이름을 입력해 주세요.",
    missingPasswordMessage: "비밀번호를 입력해 주세요.",
    missingTotpMessage: "인증기 코드를 입력해 주세요.",
    missingTotpDeviceNameMessage: "기기 이름을 입력해 주세요.",
    notMatchPasswordMessage: "비밀번호가 일치하지 않습니다.",
    "error-invalid-value": "잘못된 값입니다.",
    "error-invalid-blank": "값을 입력해 주세요.",
    "error-empty": "값을 입력해 주세요.",
    "error-invalid-length": "길이는 {1}에서 {2} 사이여야 합니다.",
    "error-invalid-length-too-short": "최소 길이는 {1}입니다.",
    "error-invalid-length-too-long": "최대 길이는 {2}입니다.",
    "error-invalid-email": "잘못된 이메일 주소입니다.",
    "error-invalid-number": "잘못된 숫자입니다.",
    "error-number-out-of-range": "숫자는 {1}에서 {2} 사이여야 합니다.",
    "error-number-out-of-range-too-small": "숫자의 최솟값은 {1}입니다.",
    "error-number-out-of-range-too-big": "숫자의 최댓값은 {2}입니다.",
    "error-pattern-no-match": "잘못된 값입니다.",
    "error-invalid-uri": "잘못된 URL입니다.",
    "error-invalid-uri-scheme": "잘못된 URL 스킴입니다.",
    "error-invalid-uri-fragment": "잘못된 URL 프래그먼트입니다.",
    "error-user-attribute-required": "이 필드를 입력해 주세요.",
    "error-invalid-date": "잘못된 날짜입니다.",
    "error-user-attribute-read-only": "이 필드는 읽기 전용입니다.",
    "error-username-invalid-character": "값에 잘못된 문자가 포함되어 있습니다.",
    "error-person-name-invalid-character": "값에 잘못된 문자가 포함되어 있습니다.",
    "error-reset-otp-missing-id": "OTP 구성을 선택해 주세요.",
    invalidPasswordExistingMessage: "기존 비밀번호가 잘못되었습니다.",
    invalidPasswordBlacklistedMessage:
        "잘못된 비밀번호: 블랙리스트에 포함된 비밀번호입니다.",
    invalidPasswordConfirmMessage: "비밀번호 확인이 일치하지 않습니다.",
    invalidTotpMessage: "인증기 코드가 잘못되었습니다.",
    usernameExistsMessage: "이미 존재하는 사용자 이름입니다.",
    emailExistsMessage: "이미 존재하는 이메일입니다.",
    federatedIdentityExistsMessage:
        "{0} {1}을(를) 사용하는 사용자가 이미 존재합니다. 계정 관리에 로그인하여 계정을 연결하세요.",
    federatedIdentityUnavailableMessage:
        "ID 공급자 {1}로 인증된 사용자 {0}이(가) 존재하지 않습니다. 관리자에게 문의하세요.",
    federatedIdentityUnmatchedEssentialClaimMessage:
        "ID 공급자가 발급한 ID 토큰이 구성된 필수 클레임과 일치하지 않습니다. 관리자에게 문의하세요.",
    confirmLinkIdpTitle: "계정이 이미 존재합니다",
    confirmOverrideIdpTitle: "브로커 링크가 이미 존재합니다",
    federatedIdentityConfirmLinkMessage:
        "{0} {1}을(를) 사용하는 사용자가 이미 존재합니다. 어떻게 계속하시겠습니까?",
    federatedIdentityConfirmOverrideMessage:
        "계정 {0}을(를) {1} 계정 {2}에 연결하려고 합니다. 하지만 귀하의 계정은 이미 다른 {3} 계정 {4}에 연결되어 있습니다. 기존 연결을 새 계정으로 교체하시겠습니까?",
    federatedIdentityConfirmReauthenticateMessage: "{0}에 계정을 연결하려면 인증하세요",
    nestedFirstBrokerFlowMessage:
        "{0} 사용자 {1}은(는) 알려진 사용자와 연결되어 있지 않습니다.",
    confirmLinkIdpReviewProfile: "프로필 검토",
    confirmLinkIdpContinue: "기존 계정에 추가",
    confirmOverrideIdpContinue: "예, 현재 계정으로 링크를 덮어씁니다",
    configureTotpMessage: "계정을 활성화하려면 모바일 인증기를 설정해야 합니다.",
    configureBackupCodesMessage: "계정을 활성화하려면 백업 코드를 설정해야 합니다.",
    updateProfileMessage: "계정을 활성화하려면 사용자 프로필을 업데이트해야 합니다.",
    updatePasswordMessage: "계정을 활성화하려면 비밀번호를 변경해야 합니다.",
    updateEmailMessage: "계정을 활성화하려면 이메일 주소를 업데이트해야 합니다.",
    resetPasswordMessage: "비밀번호를 변경해야 합니다.",
    verifyEmailMessage: "계정을 활성화하려면 이메일 주소를 인증해야 합니다.",
    linkIdpMessage: "{0}와(과) 계정을 연결하려면 이메일 주소를 인증해야 합니다.",
    emailSentMessage: "자세한 안내가 포함된 이메일이 곧 발송될 것입니다.",
    emailSendErrorMessage: "이메일 발송에 실패했습니다. 나중에 다시 시도해 주세요.",
    accountUpdatedMessage: "계정이 업데이트되었습니다.",
    accountPasswordUpdatedMessage: "비밀번호가 업데이트되었습니다.",
    delegationCompleteHeader: "로그인 성공",
    delegationCompleteMessage:
        "이 브라우저 창을 닫고 콘솔 애플리케이션으로 돌아가도 됩니다.",
    delegationFailedHeader: "로그인 실패",
    delegationFailedMessage:
        "이 브라우저 창을 닫고 콘솔 애플리케이션으로 돌아가 다시 로그인할 수 있습니다.",
    noAccessMessage: "접근 권한 없음",
    invalidPasswordMinLengthMessage: "잘못된 비밀번호: 최소 길이는 {0}입니다.",
    invalidPasswordMaxLengthMessage: "잘못된 비밀번호: 최대 길이는 {0}입니다.",
    invalidPasswordMinDigitsMessage:
        "잘못된 비밀번호: 최소 {0}개의 숫자를 포함해야 합니다.",
    invalidPasswordMinLowerCaseCharsMessage:
        "잘못된 비밀번호: 최소 {0}개의 소문자를 포함해야 합니다.",
    invalidPasswordMinUpperCaseCharsMessage:
        "잘못된 비밀번호: 최소 {0}개의 대문자를 포함해야 합니다.",
    invalidPasswordMinSpecialCharsMessage:
        "잘못된 비밀번호: 최소 {0}개의 특수 문자를 포함해야 합니다.",
    invalidPasswordNotUsernameMessage: "잘못된 비밀번호: 사용자 이름과 같을 수 없습니다.",
    invalidPasswordNotContainsUsernameMessage:
        "잘못된 비밀번호: 사용자 이름을 포함할 수 없습니다.",
    invalidPasswordNotEmailMessage: "잘못된 비밀번호: 이메일과 같을 수 없습니다.",
    invalidPasswordRegexPatternMessage:
        "잘못된 비밀번호: 정규식 패턴과 일치하지 않습니다.",
    invalidPasswordHistoryMessage:
        "잘못된 비밀번호: 마지막 {0}개의 비밀번호와 같을 수 없습니다.",
    invalidPasswordGenericMessage:
        "잘못된 비밀번호: 새 비밀번호가 비밀번호 정책과 일치하지 않습니다.",
    failedToProcessResponseMessage: "응답 처리에 실패했습니다",
    httpsRequiredMessage: "HTTPS가 필요합니다",
    realmNotEnabledMessage: "Realm이 활성화되지 않았습니다",
    invalidRequestMessage: "잘못된 요청",
    successLogout: "로그아웃되었습니다",
    failedLogout: "로그아웃 실패",
    unknownLoginRequesterMessage: "알 수 없는 로그인 요청자",
    loginRequesterNotEnabledMessage: "로그인 요청자가 활성화되지 않았습니다",
    bearerOnlyMessage: "Bearer 전용 애플리케이션은 브라우저 로그인을 시작할 수 없습니다",
    standardFlowDisabledMessage:
        "클라이언트가 주어진 response_type으로 브라우저 로그인을 시작할 수 없습니다. 클라이언트에 대해 표준 흐름이 비활성화되었습니다.",
    implicitFlowDisabledMessage:
        "클라이언트가 주어진 response_type으로 브라우저 로그인을 시작할 수 없습니다. 클라이언트에 대해 암시적 흐름이 비활성화되었습니다.",
    invalidRedirectUriMessage: "잘못된 리디렉션 URI",
    unsupportedNameIdFormatMessage: "지원되지 않는 NameIDFormat",
    invalidRequesterMessage: "잘못된 요청자",
    registrationNotAllowedMessage: "등록이 허용되지 않습니다",
    resetCredentialNotAllowedMessage: "자격 증명 재설정이 허용되지 않습니다",
    permissionNotApprovedMessage: "권한이 승인되지 않았습니다.",
    noRelayStateInResponseMessage: "ID 공급자의 응답에 relay state가 없습니다.",
    insufficientPermissionMessage: "ID를 연결할 권한이 부족합니다.",
    couldNotProceedWithAuthenticationRequestMessage:
        "ID 공급자에 대한 인증 요청을 진행할 수 없습니다.",
    couldNotObtainTokenMessage: "ID 공급자로부터 토큰을 얻을 수 없습니다.",
    unexpectedErrorRetrievingTokenMessage:
        "ID 공급자로부터 토큰을 검색하는 중 예기치 않은 오류가 발생했습니다.",
    unexpectedErrorHandlingResponseMessage:
        "ID 공급자의 응답을 처리하는 중 예기치 않은 오류가 발생했습니다.",
    identityProviderAuthenticationFailedMessage:
        "인증 실패. ID 공급자로 인증할 수 없습니다.",
    couldNotSendAuthenticationRequestMessage:
        "ID 공급자에게 인증 요청을 보낼 수 없습니다.",
    unexpectedErrorHandlingRequestMessage:
        "ID 공급자에 대한 인증 요청을 처리하는 중 예기치 않은 오류가 발생했습니다.",
    invalidAccessCodeMessage: "잘못된 액세스 코드입니다.",
    sessionNotActiveMessage: "세션이 활성 상태가 아닙니다.",
    invalidCodeMessage: "오류가 발생했습니다. 애플리케이션을 통해 다시 로그인해 주세요.",
    cookieNotFoundMessage:
        "쿠키를 찾을 수 없습니다. 브라우저에서 쿠키가 활성화되어 있는지 확인해 주세요.",
    insufficientLevelOfAuthentication: "요청된 인증 수준을 만족하지 못했습니다.",
    identityProviderUnexpectedErrorMessage:
        "ID 공급자로 인증하는 중 예기치 않은 오류가 발생했습니다",
    identityProviderMissingStateMessage: "ID 공급자의 응답에 state 매개변수가 없습니다.",
    identityProviderMissingCodeOrErrorMessage:
        "ID 공급자의 응답에 code 또는 error 매개변수가 없습니다.",
    identityProviderInvalidResponseMessage: "ID 공급자의 응답이 잘못되었습니다.",
    identityProviderInvalidSignatureMessage: "ID 공급자 응답의 서명이 잘못되었습니다.",
    identityProviderNotFoundMessage: "해당 식별자를 가진 ID 공급자를 찾을 수 없습니다.",
    identityProviderLinkSuccess:
        "이메일 인증에 성공했습니다. 원래 브라우저로 돌아가 로그인을 계속 진행해 주세요.",
    staleCodeMessage:
        "이 페이지는 더 이상 유효하지 않습니다. 애플리케이션으로 돌아가 다시 로그인해 주세요.",
    realmSupportsNoCredentialsMessage: "Realm이 어떤 자격 증명 유형도 지원하지 않습니다.",
    credentialSetupRequired: "로그인할 수 없습니다. 자격 증명 설정이 필요합니다.",
    identityProviderNotUniqueMessage:
        "Realm이 여러 ID 공급자를 지원합니다. 어떤 ID 공급자를 사용하여 인증해야 할지 결정할 수 없습니다.",
    emailVerifiedMessage: "이메일 주소가 인증되었습니다.",
    emailVerifiedAlreadyMessage: "이메일 주소가 이미 인증되었습니다.",
    staleEmailVerificationLink:
        "클릭한 링크는 오래되어 더 이상 유효하지 않습니다. 이미 이메일을 인증했을 수 있습니다.",
    identityProviderAlreadyLinkedMessage:
        "{0}에서 반환된 연합 ID가 이미 다른 사용자와 연결되어 있습니다.",
    confirmAccountLinking:
        "ID 공급자 {1}의 계정 {0}을(를) 귀하의 계정과 연결하는 것을 확인합니다.",
    confirmEmailAddressVerification: "이메일 주소 {0}의 유효성을 확인합니다.",
    confirmExecutionOfActions: "다음 작업을 수행합니다",
    backToApplication: "« 애플리케이션으로 돌아가기",
    missingParameterMessage: "누락된 매개변수: {0}",
    clientNotFoundMessage: "클라이언트를 찾을 수 없습니다.",
    clientDisabledMessage: "클라이언트가 비활성화되었습니다.",
    invalidParameterMessage: "잘못된 매개변수: {0}",
    alreadyLoggedIn: "이미 로그인되어 있습니다.",
    differentUserAuthenticated:
        "이 세션에서 이미 다른 사용자 '{0}'(으)로 인증되었습니다. 먼저 로그아웃해 주세요.",
    brokerLinkingSessionExpired:
        "브로커 계정 연결을 요청했지만 현재 세션이 더 이상 유효하지 않습니다.",
    proceedWithAction: "» 계속하려면 여기를 클릭하세요",
    acrNotFulfilled: "인증 요구 사항이 충족되지 않았습니다",
    "requiredAction.CONFIGURE_TOTP": "OTP 구성",
    "requiredAction.TERMS_AND_CONDITIONS": "이용 약관",
    "requiredAction.UPDATE_PASSWORD": "비밀번호 업데이트",
    "requiredAction.UPDATE_PROFILE": "프로필 업데이트",
    "requiredAction.VERIFY_EMAIL": "이메일 인증",
    "requiredAction.CONFIGURE_RECOVERY_AUTHN_CODES": "복구 코드 생성",
    "requiredAction.webauthn-register-passwordless": "비밀번호 없는 WebAuthn 등록",
    invalidTokenRequiredActions: "링크에 포함된 필수 작업이 유효하지 않습니다",
    doX509Login: "다음 사용자로 로그인됩니다:",
    clientCertificate: "X509 클라이언트 인증서:",
    noCertificate: "[인증서 없음]",
    pageNotFound: "페이지를 찾을 수 없습니다",
    internalServerError: "내부 서버 오류가 발생했습니다",
    "console-username": "사용자 이름:",
    "console-password": "비밀번호:",
    "console-otp": "일회용 비밀번호:",
    "console-new-password": "새 비밀번호:",
    "console-confirm-password": "비밀번호 확인:",
    "console-update-password": "비밀번호를 업데이트해야 합니다.",
    "console-verify-email":
        "이메일 주소를 인증해야 합니다. 인증 코드가 포함된 이메일을 {0}(으)로 보냈습니다. 아래 입력란에 이 코드를 입력해 주세요.",
    "console-email-code": "이메일 코드:",
    "console-accept-terms": "약관에 동의하시겠습니까? [y/n]:",
    "console-accept": "y",
    "openshift.scope.user_info": "사용자 정보",
    "openshift.scope.user_check-access": "사용자 접근 정보",
    "openshift.scope.user_full": "전체 접근 권한",
    "openshift.scope.list-projects": "프로젝트 목록",
    "saml.post-form.title": "인증 리디렉션",
    "saml.post-form.message": "리디렉션 중입니다. 잠시만 기다려 주세요.",
    "saml.post-form.js-disabled":
        "JavaScript가 비활성화되어 있습니다. 활성화하는 것을 강력히 권장합니다. 계속하려면 아래 버튼을 클릭하세요.",
    "saml.artifactResolutionServiceInvalidResponse": "아티팩트를 확인할 수 없습니다.",
    "otp-display-name": "인증 앱",
    "otp-help-text": "인증 앱의 인증 코드를 입력하세요.",
    "otp-reset-description": "어떤 OTP 구성을 제거해야 합니까?",
    "password-display-name": "비밀번호",
    "password-help-text": "비밀번호를 입력하여 로그인하세요.",
    "auth-username-form-display-name": "사용자 이름",
    "auth-username-form-help-text": "사용자 이름을 입력하여 로그인을 시작하세요",
    "auth-username-password-form-display-name": "사용자 이름 및 비밀번호",
    "auth-username-password-form-help-text":
        "사용자 이름과 비밀번호를 입력하여 로그인하세요.",
    "auth-x509-client-username-form-display-name": "X509 인증서",
    "auth-x509-client-username-form-help-text": "X509 클라이언트 인증서로 로그인하세요.",
    "auth-recovery-authn-code-form-display-name": "복구 인증 코드",
    "auth-recovery-authn-code-form-help-text":
        "이전에 생성된 목록에서 복구 인증 코드를 입력하세요.",
    "auth-recovery-code-info-message": "지정된 복구 코드를 입력하세요.",
    "auth-recovery-code-prompt": "복구 코드 #{0}",
    "auth-recovery-code-header": "복구 인증 코드로 로그인",
    "recovery-codes-error-invalid": "잘못된 복구 인증 코드",
    "recovery-code-config-header": "복구 인증 코드",
    "recovery-code-config-warning-title":
        "이 페이지를 나가면 이 복구 코드가 다시 표시되지 않습니다",
    "recovery-code-config-warning-message":
        "반드시 인쇄, 다운로드 또는 비밀번호 관리자에 복사하여 안전하게 보관하세요. 이 설정을 취소하면 계정에서 이 복구 코드가 제거됩니다.",
    "recovery-codes-print": "인쇄",
    "recovery-codes-download": "다운로드",
    "recovery-codes-copy": "복사",
    "recovery-codes-copied": "복사됨",
    "recovery-codes-confirmation-message": "이 코드를 안전한 곳에 저장했습니다",
    "recovery-codes-action-complete": "설정 완료",
    "recovery-codes-action-cancel": "설정 취소",
    "recovery-codes-download-file-header": "이 복구 코드를 안전한 곳에 보관하세요.",
    "recovery-codes-download-file-description":
        "복구 코드는 인증기에 접근할 수 없을 때 계정에 로그인할 수 있게 해주는 일회용 암호입니다.",
    "recovery-codes-download-file-date": "이 코드는 다음에 생성되었습니다",
    "recovery-codes-label-default": "복구 코드",
    "webauthn-display-name": "패스키",
    "webauthn-help-text": "패스키를 사용하여 로그인하세요.",
    "webauthn-passwordless-display-name": "패스키",
    "webauthn-passwordless-help-text": "비밀번호 없는 로그인을 위해 패스키를 사용하세요.",
    "webauthn-login-title": "패스키 로그인",
    "webauthn-registration-title": "패스키 등록",
    "webauthn-available-authenticators": "사용 가능한 패스키",
    "webauthn-unsupported-browser-text":
        "이 브라우저는 WebAuthn을 지원하지 않습니다. 다른 브라우저를 사용하거나 관리자에게 문의하세요.",
    "webauthn-doAuthenticate": "패스키로 로그인",
    "webauthn-createdAt-label": "생성일",
    "webauthn-registration-init-label": "패스키 (기본 레이블)",
    "webauthn-registration-init-label-prompt": "등록된 패스키의 레이블을 입력하세요",
    "webauthn-error-title": "패스키 오류",
    "webauthn-error-registration": "패스키 등록에 실패했습니다.<br/> {0}",
    "webauthn-error-api-get": "패스키 인증에 실패했습니다.<br/> {0}",
    "webauthn-error-different-user":
        "처음 인증된 사용자와 패스키로 인증된 사용자가 다릅니다.",
    "webauthn-error-auth-verification": "패스키 인증 결과가 유효하지 않습니다.<br/> {0}",
    "webauthn-error-register-verification":
        "패스키 등록 결과가 유효하지 않습니다.<br/> {0}",
    "webauthn-error-user-not-found": "패스키로 인증된 알 수 없는 사용자입니다.",
    "passkey-login-title": "패스키 로그인",
    "passkey-available-authenticators": "사용 가능한 패스키",
    "passkey-unsupported-browser-text":
        "이 브라우저는 패스키를 지원하지 않습니다. 다른 브라우저를 사용하거나 관리자에게 문의하세요.",
    "passkey-doAuthenticate": "패스키로 로그인",
    "passkey-createdAt-label": "생성일",
    "passkey-autofill-select": "패스키 선택",
    "identity-provider-redirector": "다른 ID 공급자와 연결",
    "identity-provider-login-label": "또는 다음으로 로그인",
    "idp-email-verification-display-name": "이메일 인증",
    "idp-email-verification-help-text": "이메일을 확인하여 계정을 연결하세요.",
    "idp-username-password-form-display-name": "사용자 이름 및 비밀번호",
    "idp-username-password-form-help-text": "로그인하여 계정을 연결하세요.",
    finalDeletionConfirmation:
        "계정을 삭제하면 복원할 수 없습니다. 계정을 유지하려면 취소를 클릭하세요.",
    irreversibleAction: "이 작업은 되돌릴 수 없습니다",
    deleteAccountConfirm: "계정 삭제 확인",
    deletingImplies: "계정을 삭제하면 다음이 적용됩니다:",
    errasingData: "모든 데이터 삭제",
    loggingOutImmediately: "즉시 로그아웃",
    accountUnusable: "이후 이 계정으로 애플리케이션을 사용할 수 없게 됩니다",
    userDeletedSuccessfully: "사용자가 성공적으로 삭제되었습니다",
    "access-denied": "접근 거부",
    "access-denied-when-idp-auth": "{0}(으)로 인증 시 접근 거부됨",
    "frontchannel-logout.title": "로그아웃 중",
    "frontchannel-logout.message": "다음 앱에서 로그아웃 중입니다",
    logoutConfirmTitle: "로그아웃",
    logoutConfirmHeader: "로그아웃하시겠습니까?",
    doLogout: "로그아웃",
    readOnlyUsernameMessage: "사용자 이름은 읽기 전용이므로 업데이트할 수 없습니다.",
    "error-invalid-multivalued-size":
        "속성 {0}은(는) 최소 {1}개, 최대 {2}개의 값을 가져야 합니다.",
    "organization.confirm-membership.title": "${kc.org.name} 조직에 가입하려고 합니다",
    "organization.confirm-membership": "아래 링크를 클릭하면 {0} 조직의 구성원이 됩니다:",
    "organization.member.register.title": "${kc.org.name} 조직에 가입하기 위해 계정 생성",
    shouldBeEqual: "{0}은(는) {1}과(와) 같아야 합니다",
    shouldBeDifferent: "{0}은(는) {1}과(와) 달라야 합니다",
    shouldMatchPattern: "패턴이 일치해야 합니다: `/{0}/`",
    mustBeAnInteger: "정수여야 합니다",
    notAValidOption: "유효한 옵션이 아닙니다",
    selectAnOption: "옵션을 선택하세요",
    remove: "제거",
    addValue: "값 추가",
    languages: "언어"
};

export default messages;
/* spell-checker: enable */
