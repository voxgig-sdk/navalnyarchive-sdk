package core

type NavalnyarchiveError struct {
	IsNavalnyarchiveError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewNavalnyarchiveError(code string, msg string, ctx *Context) *NavalnyarchiveError {
	return &NavalnyarchiveError{
		IsNavalnyarchiveError: true,
		Sdk:              "Navalnyarchive",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *NavalnyarchiveError) Error() string {
	return e.Msg
}
