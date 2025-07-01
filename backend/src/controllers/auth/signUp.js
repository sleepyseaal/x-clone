import authService from "../../services/authService.js";

async function signUp(req, res, next) {
  try {
    const { ...data } = req.body;

    const user = await authService.createUser(data);

    const accessToken = authService.generateAccessToken({
      id: user.id,
    });

    const refreshToken = authService.generateRefreshToken({
      id: user.id,
    });

    await authService.saveRefreshToken(user.id, refreshToken);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "Strict",
      path: "/api/auth/refresh",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        token: accessToken,
        user,
      },
    });
  } catch (err) {
    next(err);
  }
}

export default signUp;
